import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { WordsFormComponent } from "./pages/words-form/words-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GameComponent } from "./pages/game/game.component";
import { MovingSentenceBlockComponent } from "./components/moving-sentence-block/moving-sentence-block.component";
import { FactoryHostDirective } from "./directives/factory-host.directive";
import { AnalysisReportTableComponent } from "./pages/words-form/analysis-report-table/analysis-report-table.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    WordsFormComponent,
    GameComponent,
    MovingSentenceBlockComponent,
    FactoryHostDirective,
    AnalysisReportTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
