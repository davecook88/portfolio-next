import { LETTER_STATUS } from '@/components/wordle/constants/letterStatus';

export type WordleClueEntry = {
  status: LETTER_STATUS;
  index: number | null;
  notIndex: number[] | null;
};

export type WordleClueMap = Record<Letter, WordleClueEntry>;

export type LetterPositionFrequencyMap = Map<Index, Map<Letter, number>>;
