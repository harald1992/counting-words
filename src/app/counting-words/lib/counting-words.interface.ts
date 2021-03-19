// this will be an object that is actually a word but also contains the frequency of this word.
export interface IWordFrequency {
  getWord(): string;
  getFrequency(): number;
}

export interface IWordFrequencyAnalyzer {
  calculateHighestFrequency(text: string): number;
  calculateFrequencyForWord(text: string, word: string): number;
  calculateMostFrequentNWords(text: string, n: number): IWordFrequency[];
}
