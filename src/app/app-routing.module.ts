import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameComponent } from "./pages/game/game.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { WordsFormComponent } from "./pages/words-form/words-form.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "form",
    component: WordsFormComponent,
  },
  {
    path: "game",
    component: GameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
