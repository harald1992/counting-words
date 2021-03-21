import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-moving-sentence-block",
  templateUrl: "./moving-sentence-block.component.html",
  styleUrls: ["./moving-sentence-block.component.scss"],
})
export class MovingSentenceBlockComponent implements OnInit, OnDestroy {
  @Input() data: any;

  @Output() sentenceClicked: EventEmitter<any> = new EventEmitter();

  startMoving: boolean = false;
  position: string;
  timeToFall: any;

  constructor() {
    // number between 10 and 90 for x-axis location
    const randomNumber: string = Math.floor(Math.random() * 80 + 10).toString();
    this.position = randomNumber + "%";
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.startMoving = true;
    }, 50);

    this.timeToFall = setTimeout(() => {
      // if the word has a positive score value, give minus points when it falls.
      const value = this.data.value > 0 ? -this.data.value : 0;
      this.sentenceClicked.emit(value);
    }, 10050);
  }

  onSentenceClicked() {
    this.sentenceClicked.emit(this.data.value);
  }

  ngOnDestroy() {
    clearTimeout(this.timeToFall);
  }
}
