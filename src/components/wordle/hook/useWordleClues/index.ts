import { useCallback, useMemo, useState } from 'react';

import { lowerCaseAlphabet } from '@/components/wordle/constants/alphabet';
import { LETTER_STATUS } from '@/components/wordle/constants/letterStatus';
import { WORD_LIST } from '@/components/wordle/constants/wordlist';
import {
  WordleClueEntry,
  WordleClueMap,
} from '@/components/wordle/hook/useWordleClues/types';
import { Word } from '@/components/wordle/Word';
import { Wordmap } from '@/components/wordle/WordMap';

export const useWordleClues = () => {
  const allWords = new Wordmap(WORD_LIST).words;

  const [wordleClues, setWordleClues] = useState(
    lowerCaseAlphabet.reduce((map, letter) => {
      map[letter.toUpperCase()] = {
        status: LETTER_STATUS.UNKNOWN,
        index: null,
      };
      return map;
    }, {} as WordleClueMap)
  );

  const orderSuggestions = (suggestions: Word[]) => {
    const knownLetters = Object.entries(wordleClues)
      .filter(([, clue]) => clue.status !== LETTER_STATUS.UNKNOWN)
      .map(([letter]) => letter);

    return suggestions.sort((word1, word2) => {
      let wordScore1 = 0;
      let wordScore2 = 0;
      if (word1.multiLetters) wordScore1 = 5;
      if (word2.multiLetters) wordScore2 = 5;
      if (word1.containsMultiletter(knownLetters)) {
        wordScore1 += 10;
      }
      if (word2.containsMultiletter(knownLetters)) {
        wordScore2 += 10;
      }

      return wordScore1 > wordScore2 ? 1 : wordScore1 < wordScore2 ? -1 : 0;
    });
  };

  const getFilterFunctions = useCallback(() => {
    const filterFunctions: Array<(word: Word) => boolean> = [];
    for (const [letter, clue] of Object.entries(wordleClues)) {
      if (clue.status === LETTER_STATUS.INDEX_KNOWN && clue.index !== null) {
        filterFunctions.push((word: Word) =>
          word.hasAtIndex(letter)(clue.index as number)
        );
      } else if (clue.status === LETTER_STATUS.NOT_IN_WORD) {
        filterFunctions.push((word: Word) => !word.has(letter));
      } else if (clue.status === LETTER_STATUS.IN_WORD) {
        filterFunctions.push((word: Word) => word.has(letter));
      }
    }
    return filterFunctions;
  }, [wordleClues]);

  const suggestions = useMemo(() => {
    const filterFunctions = getFilterFunctions();
    if (!filterFunctions.length) return allWords;
    const filteredWords = allWords.filter((word) => {
      const falseFunction = filterFunctions.find((func) => {
        return !func(word);
      });
      return Boolean(!falseFunction);
    });
    return orderSuggestions(filteredWords);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFilterFunctions, allWords]);

  const setClue = (letter: Letter) => (clue: WordleClueEntry) => {
    setWordleClues((prev) => {
      return { ...prev, [letter]: clue };
    });
  };

  const getClue = (letter: Letter) => {
    return wordleClues[letter] as WordleClueEntry;
  };

  return {
    suggestions,
    setClue,
    getClue,
  };
};
