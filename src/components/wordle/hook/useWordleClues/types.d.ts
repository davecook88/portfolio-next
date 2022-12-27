import { LETTER_STATUS } from '@/components/wordle/constants/letterStatus';

export type WordleClueEntry = {
  status: LETTER_STATUS;
  index: number | null;
};

export type WordleClueMap = Record<
  Letter,
  {
    status: LETTER_STATUS;
    index: number | null;
  }
>;
