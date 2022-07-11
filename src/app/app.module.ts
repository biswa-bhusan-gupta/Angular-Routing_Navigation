import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
// import { TestComponent } from "./test/test.component";
// import { CardComponent } from "./card/card.component";
import { PageComponent } from "./page/page.component";

import { AppRoutingModule, routingComponents } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, routingComponents, PageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
