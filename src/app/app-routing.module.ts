import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { CardComponent } from "./card/card.component";
import { PageComponent } from "./page/page.component";
import { CardDetailsComponent } from "./card-details/card-details.component";

const routes: Routes = [
  // { path: "", redirectTo: "/card", pathMatch: "full" },
  { path: "test", component: TestComponent },
  { path: "card", component: CardComponent },
  { path: "card/:id", component: CardDetailsComponent },
  { path: "**", component: PageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  TestComponent,
  CardComponent,
  PageComponent,
  CardDetailsComponent
];
