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
    this.textForm = new FormGroup(
      {
        textContent: new FormControl("", [
          Validators.required,
          // Validators.pattern("^[a-zA-Z .,]+$"),
        ]),
      },
      { updateOn: "submit" }
    );
  }

  onFormSubmit() {
    if (this.textContent.status === "VALID") {
      this.analysisReport = this.wordAnalyzer.getAllWordsFromText(
        this.textContent.value
      );
    }
  }

  get textContent(): AbstractControl {
    return this.textForm.controls.textContent;
  }

  generateSentence() {
    const sentence = this.sentenceService.getRandomSentence();
    this.textContent.setValue(sentence);
  }
}
