import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { CardComponent } from "./card/card.component";

const routes: Routes = [
  { path: "test", component: TestComponent },
  { path: "card", component: CardComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [TestComponent, CardComponent];
