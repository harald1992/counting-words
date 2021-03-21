import {
  Component,
  ComponentFactoryResolver,
  Type,
  ViewChild,
} from "@angular/core";
import { MovingSentenceBlockComponent } from "src/app/components/moving-sentence-block/moving-sentence-block.component";
import WordFrequencyAnalyzer, {
  WordFrequency,
} from "src/app/counting-words/lib/counting-words";
import { FactoryHostDirective } from "src/app/directives/factory-host.directive";
import { SentenceService } from "src/app/services/sentence.service";
import { take } from "rxjs/operators";

export interface SentenceComponent {
  data: any;
  sentenceClicked: any;
}

export class SentenceItem {
  constructor(public component: Type<any>, public data: any) {}
}

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
})
export class GameComponent {
  words: WordFrequency[] = [];
  wordAnalyzer: WordFrequencyAnalyzer = new WordFrequencyAnalyzer();

  lastScore: number = 0;
  wordObjective: string = "";
  gameInProgress: boolean = false;
  score: number = 0;
  timeDurationS: number = 0;

  gameDurationTimer: any;
  spawnSentenceInterval: any;
  endGameTimer: any;

  @ViewChild(FactoryHostDirective, { static: true })
  factoryHost!: FactoryHostDirective;

  constructor(
    private sentenceService: SentenceService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  createSentence(): string {
    return this.sentenceService.getRandomSentence(15);
  }

  /* Creates a new falling sentence block */
  createComponent(sentence: string = "", value: number = 0) {
    const newComponent = new SentenceItem(MovingSentenceBlockComponent, {
      sentence,
      value,
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      newComponent.component
    );
    const viewContainerRef = this.factoryHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent<SentenceComponent>(
      componentFactory
    );

    // give the compnent a sentence and it's score
    componentRef.instance.data = newComponent.data;
    componentRef.instance.sentenceClicked
      .pipe(take(1))
      .subscribe((value: any) => {
        // destroy the clicked sentence component, edit score and complete this Subscription via take(1)
        this.score += value;
        componentRef.destroy();
      });
  }

  startGame(gameLengthMs: number = 30000) {
    this.wordObjective = this.sentenceService.getRandomWord();

    this.gameInProgress = true;
    this.score = 0;
    this.timeDurationS = gameLengthMs / 1000;

    this.gameDurationTimer = setInterval(() => {
      this.timeDurationS = this.timeDurationS - 1;
    }, 1000);

    this.spawnSentenceInterval = setInterval(() => {
      const sentence = this.createSentence();

      /* check if on of the 3 most frequent words is the objective.
       If the objective word is in the top 3, give a positive score if cought.*/
      let isWordObjectiveTheMostUsed: boolean = false;
      const mostFrequentThreeWords = this.wordAnalyzer.calculateMostFrequentNWords(
        sentence,
        3
      );

      mostFrequentThreeWords.forEach((item) => {
        if (this.wordObjective === item.getWord()) {
          isWordObjectiveTheMostUsed = true;
        }
      });

      const value: number = isWordObjectiveTheMostUsed ? 1 : -1;

      this.createComponent(sentence, value);
    }, 900);

    this.endGameTimer = setTimeout(() => {
      this.endGame();
    }, gameLengthMs);
  }

  clearBoard() {
    const viewContainerRef = this.factoryHost.viewContainerRef;
    viewContainerRef.clear();
  }

  endGame() {
    this.lastScore = this.score;
    clearInterval(this.gameDurationTimer);
    clearInterval(this.spawnSentenceInterval);
    clearTimeout(this.endGameTimer);
    this.clearBoard();
    this.score = 0;
    this.gameInProgress = false;
  }
}
