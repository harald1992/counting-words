import {
  IWordFrequency,
  IWordFrequencyAnalyzer,
} from './counting-words.interface';

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
    // console.log('new freq = ' + this.frequency);
  }
}

export class WordFrequencyAnalyzer implements IWordFrequencyAnalyzer {
  constructor() {}

  getAllWordsFromText(text: string): WordFrequency[] {
    text = text.toLowerCase();
    const listOfWords: WordFrequency[] = [];

    const wordRegex = /([A-Za-z])\w+/g;
    const words = text.match(wordRegex);

    words?.forEach((wordText) => {
      const alreadyExistingWord = listOfWords.find(
        (e) => e.getWord() === wordText
      );
      // console.log(alreadyExistingWord);
      if (alreadyExistingWord) {
        alreadyExistingWord.incrementFrequency();
      } else {
        listOfWords.push(new WordFrequency(wordText));
      }
    });

    return listOfWords;
  }

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

  calculateFrequencyForWord(text: string, word: string): number {
    const listOfWords: WordFrequency[] = this.getAllWordsFromText(text);

    const wordInList = listOfWords.find((e) => e.getWord() === word);

    // console.log(wordInList);

    return wordInList?.getFrequency() || 0;
  }

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
