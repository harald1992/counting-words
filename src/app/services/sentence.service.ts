import { Injectable } from "@angular/core";

import { EXAMPLE_SENTENCES_MAP } from "../utils/sentence-dictionary";

@Injectable({
  providedIn: "root",
})
export class SentenceService {
  constructor() {}

  getRandomWord(): string {
    const getKeys: number[] = Object.keys(EXAMPLE_SENTENCES_MAP).map(Number);
    const maxKey = Math.max(...getKeys);
    const randomNumber: number = Math.floor(Math.random() * (maxKey + 1));

    return EXAMPLE_SENTENCES_MAP.hasOwnProperty(randomNumber)
      ? EXAMPLE_SENTENCES_MAP[randomNumber]
      : "";
  }

  getRandomSentence(maxSentenceLength: number = 100): string {
    let sentence: string = "";

    const sentenceLength: number =
      Math.floor(Math.random() * maxSentenceLength) + 1;

    for (let i = 0; i < sentenceLength; i++) {
      const word = this.getRandomWord();
      if (i === 0) {
        sentence += word.charAt(0).toUpperCase() + word.slice(1);
      } else if (i === sentenceLength - 1) {
        sentence += ".";
      } else if (i < sentenceLength) {
        sentence += " " + word;
      }
    }

    return sentence;
  }
}
