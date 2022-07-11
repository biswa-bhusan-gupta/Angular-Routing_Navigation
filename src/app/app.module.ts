import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
// import { TestComponent } from "./test/test.component";
// import { CardComponent } from "./card/card.component";
import { PageComponent } from "./page/page.component";

// STEP 3 : IMPORT APP ROUTING MODULE AND ROUTING COMPONENTS
import { AppRoutingModule, routingComponents } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, routingComponents, PageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
