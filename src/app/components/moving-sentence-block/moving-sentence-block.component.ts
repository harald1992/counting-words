import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-moving-sentence-block",
  templateUrl: "./moving-sentence-block.component.html",
  styleUrls: ["./moving-sentence-block.component.scss"],
})
export class MovingSentenceBlockComponent implements OnInit {
  @Input() data: any;

  @Output() sentenceClicked: EventEmitter<any> = new EventEmitter();
  startMoving: boolean = false;
  position: string;

  constructor() {
    // number between 10 and 90 for x-axis location
    const randomNumber: string = Math.floor(Math.random() * 80 + 10).toString();
    this.position = randomNumber + "%";
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.startMoving = true;
    }, 100);

    setTimeout(() => {
      this.sentenceClicked.emit(-this.data.value);
    }, 5100);
  }

  onSentenceClicked() {
    console.log("clicked on sentence");
    this.sentenceClicked.emit(this.data.value);
  }
}
