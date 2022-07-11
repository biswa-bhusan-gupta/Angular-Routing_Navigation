import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.css"]
})
export class CardDetailsComponent {
  constructor(private route: ActivatedRoute) {}

  component = "Card Details Component";
  public cardId;

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.cardId = id;
  }
}
