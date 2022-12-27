import { WordleClueEntry } from '@/components/wordle/hook/useWordleClues/types';

export type GuessRowProps = {
  guess: Letter[];
  active: boolean;
  getClue: (letter: Letter) => WordleClueEntry | undefined;
  setClue: (letter: Letter) => (clue: WordleClueEntry) => void;
};
