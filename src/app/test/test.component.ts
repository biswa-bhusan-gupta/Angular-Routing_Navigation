import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  component = "Test Component";
  onTrain() {
    this.router.navigate(["train"], { relativeTo: this.route });
  }
  onVal() {
    this.router.navigate(["val"], { relativeTo: this.route });
  }
}
