import { WordleClueEntry } from '@/components/wordle/hook/useWordleClues/types';

export type LetterBoxProps = {
  letter?: Letter;
  index: number;
  activeGuess: boolean;
  clue?: WordleClueEntry;
  setLetterClue?: (clue: WordleClueEntry) => void;
};
