import { Word } from '@/components/wordle/Word';

type SuggestionsListProps = {
  words: Word[];
  addGuessWord: (word: string) => void;
};
