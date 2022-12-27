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
}
