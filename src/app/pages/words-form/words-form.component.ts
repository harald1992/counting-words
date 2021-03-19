import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-words-form",
  templateUrl: "./words-form.component.html",
  styleUrls: ["./words-form.component.scss"],
})
export class WordsFormComponent {
  textForm: FormGroup;

  constructor() {
    this.textForm = new FormGroup({
      textContent: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$"),
      ]),
    });
  }

  onFormSubmit() {
    console.log(this.textContent);

    // Dostuff
  }

  get textContent(): AbstractControl {
    return this.textForm.value.textContent;
  }
}
