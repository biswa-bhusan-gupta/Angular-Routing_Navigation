import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { CardComponent } from "./card/card.component";
import { PageComponent } from "./page/page.component";

const routes: Routes = [
  { path: "", redirectTo: "/card", pathMatch: "full" },
  { path: "test", component: TestComponent },
  { path: "card", component: CardComponent },
  { path: "**", component: PageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [TestComponent, CardComponent, PageComponent];
