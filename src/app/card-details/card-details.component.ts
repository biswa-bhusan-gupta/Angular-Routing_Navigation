import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.css"]
})
export class CardDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  component = "Card Details Component";
  public cardId;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get("id"));
      this.cardId = id;
    });
  }

  goPrevious() {
    let previousId = this.cardId - 1;
    this.router.navigate(["/card", previousId]);
  }
  goNext() {
    let nextId = this.cardId + 1;
    this.router.navigate(["/card", nextId]);
  }

  goBack() {
    let selectId = this.cardId ? this.cardId : null;
    this.router.navigate(["/card", { id: selectId }]);
  }
}
