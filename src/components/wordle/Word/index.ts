import { LetterPositionFrequencyMap } from '@/components/wordle/hook/useWordleClues/types';

export class Word {
  string: string;
  letterMap: Map<Index, Letter>;
  lettersSet: Set<Letter>;
  multiLetters: Set<Letter> | null;

  constructor(word: string) {
    this.string = word;
    this.multiLetters = null;
    const lettersArray = word.split('').map((l) => l.toUpperCase());
    this.lettersSet = this.getLettersSet(lettersArray);
    this.letterMap = this.getLettersMap(lettersArray);
  }

  containsMultiletter(letters: Letter[]) {
    if (!this.multiLetters) return false;
    for (const letter of letters) {
      if (this.multiLetters.has(letter)) return true;
    }
    return false;
  }

  private getLettersSet(letters: Letter[]) {
    const set = new Set();
    letters.forEach((l) => {
      if (set.has(l)) {
        if (!this.multiLetters) {
          this.multiLetters = new Set();
        }
        this.multiLetters.add(l);
      }
      set.add(l);
    });
    return new Set(letters);
  }

  private getLettersMap(letters: Letter[]) {
    const map: Map<Index, Letter> = new Map();
    letters.forEach((letter, index) => map.set(index, letter));
    return map;
  }

  has(letter: Letter): boolean {
    return this.lettersSet.has(letter);
  }

  hasAtIndex(letter: Letter) {
    return (index: Index) => {
      return this.letterMap.get(index) === letter;
    };
  }

  /**
   * @description Receives a map which contains the number of times each position contains each letter.
   * Then the frequency of each letter in each position for this particular word is summed to create a score.
   * The result is returned as 1 - ( 1 / score ) to make sure that the return value is between 0-1.
   *
   * Eg: A two letter word - TO.
   * There are 1000 words beginning with T in our suggestions list
   * There are 500 words ending with O in our suggestions list.
   * score = 1500
   * return value = 1 - ( 1 / 1500 ) = 0.99993333...
   *
   * @param {LetterPositionFrequencyMap} positionFrequencyMap
   * @memberof Word
   */
  getLetterScore(positionFrequencyMap: LetterPositionFrequencyMap) {
    let score = 0;
    this.letterMap.forEach((letter, index) => {
      const overallFrequency =
        positionFrequencyMap.get(index)?.get(letter) || 0;
      score += overallFrequency;
    });

    const wordScore = 1 / (score / 1000);
    return wordScore;
  }
}
