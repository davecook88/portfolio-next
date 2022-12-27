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
  const allWords = useMemo(() => {
    return new Wordmap(WORD_LIST).words;
  }, []);

  /*
WordleClueContext is a map with each letter as an entry as an associated number.

If the letter has not yet been guessed, its value is -9
If the letter has a known index, it's value will be the index (0-4)
If the letter exists but has no known index, its value will be -1
If the letter does not exist, its value will be -2
*/
  const [wordleClues, setWordleClues] = useState(
    lowerCaseAlphabet.reduce((map, letter) => {
      map[letter] = { status: LETTER_STATUS.UNKNOWN, index: null };
      return map;
    }, {} as WordleClueMap)
  );

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

  const getSuggestions = useCallback(() => {
    const filterFunctions = getFilterFunctions();
    const filteredWords = allWords.filter((word) => {
      return Boolean(filterFunctions.find((func) => func(word)));
    });
    return filteredWords.map((w) => w.string);
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
    getSuggestions,
    setClue,
    getClue,
  };
};
