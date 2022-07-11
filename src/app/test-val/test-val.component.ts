import { Component } from "@angular/core";

@Component({
  selector: "app-val",
  template: `{{ component }}`
})
export class ValComponent {
  component = "Val Component";
}
