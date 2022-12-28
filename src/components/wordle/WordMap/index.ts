import { lowerCaseAlphabet } from '@/components/wordle/constants/alphabet';
import { Word } from '@/components/wordle/Word';

export class Wordmap {
  words: Word[];
  private containsMap: Map<string, Set<Word>>;

  constructor(wordsList: string[]) {
    this.containsMap = new Map();
    lowerCaseAlphabet.forEach((letter) =>
      this.containsMap.set(letter.toUpperCase(), new Set())
    );
    this.words = this.populateWords(wordsList);
  }

  private populateWords(wordList: string[]) {
    return wordList.map((w) => {
      const word = new Word(w);
      return word;
    });
  }
}
