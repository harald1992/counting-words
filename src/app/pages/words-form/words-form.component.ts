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
  analysisReport: WordFrequency[] = [];
  wordAnalyzer: WordFrequencyAnalyzer = new WordFrequencyAnalyzer();

  constructor(private sentenceService: SentenceService) {
    this.textForm = new FormGroup({
      textContent: new FormControl("", [Validators.required]),
    });
  }

  onFormSubmit() {
    if (this.textContent.status === "VALID") {
      this.analysisReport = this.wordAnalyzer.getAllWordsFromText(
        this.textContent.value
      );
    }
  }

  get textContent(): AbstractControl {
    console.log(this.textForm.controls.textContent);

    return this.textForm.controls.textContent;
  }

  hasError(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  generateSentence() {
    const sentence = this.sentenceService.getRandomSentence();
    this.textContent.setValue(sentence);
  }
}
