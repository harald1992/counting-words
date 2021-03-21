import {
  IWordFrequency,
  IWordFrequencyAnalyzer,
} from "./counting-words.interface";

export class WordFrequency implements IWordFrequency {
  private word: string;

  private frequency: number = 1;

  constructor(word: string) {
    this.word = word;
  }

  getWord(): string {
    return this.word;
  }

  getFrequency(): number {
    return this.frequency;
  }

  incrementFrequency(): void {
    this.frequency++;
  }
}

export class WordFrequencyAnalyzer implements IWordFrequencyAnalyzer {
  constructor() {}

  /* Exctracts all words from the input text and returns it in an unsorted array of WordFrequency objects. */
  getAllWordsFromText(text: string): WordFrequency[] {
    text = text.toLowerCase();
    const listOfWords: WordFrequency[] = [];

    const wordRegex = /([A-Za-z])\w*/g;
    const words = text.match(wordRegex);

    words?.forEach((wordText) => {
      const alreadyExistingWord = listOfWords.find(
        (e) => e.getWord() === wordText
      );
      if (alreadyExistingWord) {
        alreadyExistingWord.incrementFrequency();
      } else {
        listOfWords.push(new WordFrequency(wordText));
      }
    });

    return listOfWords;
  }

  /* Returns the highest frequency a word appears in the text. */
  calculateHighestFrequency(text: string): number {
    let highestFrequency: number = 0;

    const listOfWords: WordFrequency[] = this.getAllWordsFromText(text);

    listOfWords?.forEach((word: WordFrequency) => {
      const frequency = word.getFrequency();
      if (frequency > highestFrequency) {
        highestFrequency = frequency;
      }
    });
    return highestFrequency;
  }

  /* Return the frequency the specific word appears in the text. */
  calculateFrequencyForWord(text: string, word: string): number {
    const listOfWords: WordFrequency[] = this.getAllWordsFromText(text);

    const wordInList = listOfWords.find((e) => e.getWord() === word);

    return wordInList?.getFrequency() || 0;
  }

  /* Returns the N most frequent words in an sorted array of WordFrequency objects */
  calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
    const listOfWords: WordFrequency[] = this.getAllWordsFromText(text);
    listOfWords.sort((a, b) => {
      return a.getFrequency() === b.getFrequency()
        ? a.getWord().localeCompare(b.getWord())
        : b.getFrequency() - a.getFrequency();
    });

    return listOfWords.slice(0, n);
  }
}

export default WordFrequencyAnalyzer;
