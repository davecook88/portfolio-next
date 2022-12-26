export class Word {
  string: string;
  letterMap: Map<Index, Letter>;
  lettersSet: Set<Letter>;

  constructor(word: string) {
    this.string = word;
    const lettersArray = word.split('');
    this.lettersSet = this.getLettersSet(lettersArray);
    this.letterMap = this.getLettersMap(lettersArray);
  }

  private getLettersSet(letters: Letter[]) {
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
