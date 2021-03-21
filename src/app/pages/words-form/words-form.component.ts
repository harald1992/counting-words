import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import WordFrequencyAnalyzer, {
  WordFrequency,
} from "../../counting-words/lib/counting-words";
import { SentenceService } from "../../services/sentence.service";

@Component({
  selector: "app-words-form",
  templateUrl: "./words-form.component.html",
  styleUrls: ["./words-form.component.scss"],
})
export class WordsFormComponent {
  textForm: FormGroup;
  wordAnalyzer: WordFrequencyAnalyzer = new WordFrequencyAnalyzer();

  reportUnorderedList: WordFrequency[] = [];
  highestFrequency: number = 0;
  frequencyForWord: number = 0;
  mostFrequentNWords: WordFrequency[] = [];

  constructor(private sentenceService: SentenceService) {
    this.textForm = new FormGroup({
      textContent: new FormControl("", [Validators.required]),
      word: new FormControl(""),
      mostFrequentNWordAmount: new FormControl(""),
    });
  }

  getUnorderedList() {
    if (this.textContent.status === "VALID") {
      this.reportUnorderedList = this.wordAnalyzer.getAllWordsFromText(
        this.textContent.value
      );
    }
  }

  getHighestFrequency() {
    if (this.textContent.status === "VALID") {
      this.highestFrequency = this.wordAnalyzer.calculateHighestFrequency(
        this.textContent.value
      );
    }
  }

  getFrequencyForWord() {
    if (this.textContent.status === "VALID") {
      this.frequencyForWord = this.wordAnalyzer.calculateFrequencyForWord(
        this.textContent.value,
        this.word.value
      );
    }
  }

  getMostFrequentNWords() {
    if (this.textContent.status === "VALID") {
      this.mostFrequentNWords = this.wordAnalyzer.calculateMostFrequentNWords(
        this.textContent.value,
        this.mostFrequentNWordAmount.value
      );
    }
  }

  onFormSubmit() {
    if (this.textContent.status === "VALID") {
      this.getUnorderedList();
      this.getHighestFrequency();
      this.getFrequencyForWord();
      this.getMostFrequentNWords();
    }
  }

  get textContent(): AbstractControl {
    return this.textForm.controls.textContent;
  }

  get word(): AbstractControl {
    return this.textForm.controls.word;
  }

  get mostFrequentNWordAmount(): AbstractControl {
    return this.textForm.controls.mostFrequentNWordAmount;
  }

  hasError(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  generateSentence() {
    const sentence = this.sentenceService.getRandomSentence();
    this.textContent.setValue(sentence);
  }
}
