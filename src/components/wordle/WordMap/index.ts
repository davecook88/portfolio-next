import { Word } from '@/components/wordle/Word';

export class Wordmap {
  words: Word[];
  private containsMap: Map<string, Set<Word>>;

  constructor(wordsList: string[]) {
    this.containsMap = new Map();
    this.words = this.populateWords(wordsList);
  }

  private populateWords(wordList: string[]) {
    return wordList.map((w) => new Word(w));
  }
}
