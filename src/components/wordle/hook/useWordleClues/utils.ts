import { LETTER_STATUS } from '@/components/wordle/constants/letterStatus';
import {
  LetterPositionFrequencyMap,
  WordleClueMap,
} from '@/components/wordle/hook/useWordleClues/types';
import { Word } from '@/components/wordle/Word';

const getKnownUnknownLetters = (wordleClues: WordleClueMap) => {
  const knownLetters: Letter[] = [];
  const unknownLetters: Letter[] = [];
  Object.entries(wordleClues).forEach(([letter, clue]) => {
    if (clue.status === LETTER_STATUS.UNKNOWN) {
      unknownLetters.push(letter);
    } else if (clue.status === LETTER_STATUS.IN_WORD) {
      knownLetters.push(letter);
    }
  });
  return {
    knownLetters,
    unknownLetters,
  };
};

export const orderSuggestions = (
  suggestions: Word[],
  wordleClues: WordleClueMap
) => {
  const { knownLetters, unknownLetters } = getKnownUnknownLetters(wordleClues);
  const positionFrequencyMap = getLetterPositionFrequency(
    suggestions,
    unknownLetters
  );

  const orderedSuggestions = suggestions.sort((word1, word2) => {
    let wordScore1 = word1.getLetterScore(positionFrequencyMap);
    let wordScore2 = word2.getLetterScore(positionFrequencyMap);
    if (word1.multiLetters) wordScore1 += 5;
    if (word2.multiLetters) wordScore2 += 5;
    if (word1.containsMultiletter(knownLetters)) {
      wordScore1 += 10;
    }
    if (word2.containsMultiletter(knownLetters)) {
      wordScore2 += 10;
    }

    return wordScore1 > wordScore2 ? 1 : wordScore1 < wordScore2 ? -1 : 0;
  });

  return orderedSuggestions;
};

const getLetterPositionFrequency = (
  suggestions: Word[],
  unknownLetters: string[]
) => {
  const map: LetterPositionFrequencyMap = new Map();
  suggestions.forEach((word) => {
    word.letterMap.forEach((letter, index) => {
      if (unknownLetters && !unknownLetters.includes(letter)) return;
      const existingIndexMap = map.get(index) || new Map();
      const existingLetterCount = existingIndexMap.get(letter) || 0;
      existingIndexMap.set(letter, existingLetterCount + 1);
      map.set(index, existingIndexMap);
    });
  });
  return map;
};
