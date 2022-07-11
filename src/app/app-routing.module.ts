import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { CardComponent } from "./card/card.component";
import { PageComponent } from "./page/page.component";
import { CardDetailsComponent } from "./card-details/card-details.component";
import { TrainComponent } from "./test-train/test-train.component";
import { ValComponent } from "./test-val/test-val.component";

// STEP 1 : CREATE A LIST OF ROUTES CONSISTING OF COMPONENTS AND THEIR CORRESPONDING PATHS
const routes: Routes = [
  // { path: "", redirectTo: "/card", pathMatch: "full" },
  {
    path: "test",
    component: TestComponent,
    children: [
      { path: "train", component: TrainComponent },
      { path: "val", component: ValComponent }
    ]
  },
  { path: "card", component: CardComponent },
  { path: "card/:id", component: CardDetailsComponent },
  { path: "**", component: PageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// STEP 2 : CREATE A LIST OF ROUTING COMPONENT CONSISTING OF ALL COMPONENTS
export class AppRoutingModule {}
export const routingComponents = [
  TestComponent,
  CardComponent,
  PageComponent,
  CardDetailsComponent,
  TrainComponent,
  ValComponent
];
