import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
} from "@angular/core";
import { MovingSentenceBlockComponent } from "src/app/components/moving-sentence-block/moving-sentence-block.component";
import WordFrequencyAnalyzer, {
  WordFrequency,
} from "src/app/counting-words/lib/counting-words";
import { AdDirective } from "src/app/directives/ad.directive";
import { SentenceService } from "src/app/services/sentence.service";
import { take } from "rxjs/operators";

export interface AdComponent {
  data: any;
  sentenceClicked: any;
}

export class AdItem {
  constructor(public component: Type<any>, public data: any) {}
}

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit, OnDestroy {
  words: WordFrequency[] = [];
  wordAnalyzer: WordFrequencyAnalyzer = new WordFrequencyAnalyzer();

  gameStarted: boolean = false;
  score: number = 0;
  timeDuration: number = 0;

  timer: any;
  gameRunning: any;
  endGameTimer: any;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  constructor(
    private sentenceService: SentenceService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  createWord(): string {
    const newSentence = this.sentenceService.getRandomSentence(25);
    return newSentence;
  }

  createComponent() {
    const sentence = this.createWord();
    const value = 3;

    const newComponent = new AdItem(MovingSentenceBlockComponent, {
      sentence,
      value,
    });
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      newComponent.component
    );

    const viewContainerRef = this.adHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      componentFactory
    );
    componentRef.instance.data = newComponent.data;

    componentRef.instance.sentenceClicked
      .pipe(take(1))
      .subscribe((value: any) => {
        // destroy the clicked sentence component, edit score and complete this Subscription via take(1)
        console.log(value);
        this.score += value;
        componentRef.destroy();
      });
  }

  startGame(gameLengthSeconds: number = 60000) {
    this.gameStarted = true;
    this.score = 0;
    this.timeDuration = gameLengthSeconds / 1000;

    this.timer = setInterval(() => {
      this.timeDuration = this.timeDuration - 1;
    }, 1000);

    this.gameRunning = setInterval(() => {
      this.createComponent();
    }, 850);

    this.endGameTimer = setTimeout(() => {
      this.endGame();
    }, gameLengthSeconds);
  }

  clearBoard() {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
  }

  endGame() {
    clearInterval(this.timer);
    clearInterval(this.gameRunning);
    clearTimeout(this.endGameTimer);
    this.clearBoard();
    // todo: prevent current falling blocks from also editi8ng the score after the game is already over.
    this.gameStarted = false;
  }

  ngOnDestroy() {}
}
