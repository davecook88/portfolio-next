import { useCallback, useMemo, useState } from 'react';

import { lowerCaseAlphabet } from '@/components/wordle/constants/alphabet';
import { LETTER_STATUS } from '@/components/wordle/constants/letterStatus';
import { WORD_LIST } from '@/components/wordle/constants/wordlist';
import {
  WordleClueEntry,
  WordleClueMap,
} from '@/components/wordle/hook/useWordleClues/types';
import { orderSuggestions } from '@/components/wordle/hook/useWordleClues/utils';
import { Word } from '@/components/wordle/Word';
import { Wordmap } from '@/components/wordle/WordMap';

export const useWordleClues = () => {
  const [allWords] = useState(new Wordmap(WORD_LIST).words);
  const getInitialCluesState = () =>
    lowerCaseAlphabet.reduce((map, letter) => {
      map[letter.toUpperCase()] = {
        status: LETTER_STATUS.UNKNOWN,
        index: null,
        notIndex: null,
      };
      return map;
    }, {} as WordleClueMap);

  const [wordleClues, setWordleClues] = useState(getInitialCluesState());

  const resetClues = () => setWordleClues(getInitialCluesState());

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
        filterFunctions.push(
          (word: Word) =>
            word.has(letter) &&
            !clue.notIndex?.find((index) => word.hasAtIndex(letter)(index))
        );
      }
    }
    return filterFunctions;
  }, [wordleClues]);

  const suggestions = useMemo(() => {
    const filterFunctions = getFilterFunctions();
    const filteredWords = allWords.filter((word) => {
      const falseFunction = filterFunctions.find((func) => {
        return !func(word);
      });
      return Boolean(!falseFunction);
    });
    const orderedSuggestions = orderSuggestions(filteredWords, wordleClues);

    return orderedSuggestions;
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
    resetClues,
  };
};
