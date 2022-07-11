import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<div>
    <h1>
      {{ component }}
    </h1>
    <nav>
      <a routerLink="/test" routerLinkActive="active">Test</a>
      <br />
      <a routerLink="/card" routerLinkActive="active">Card</a>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  component = "App Component";
}
