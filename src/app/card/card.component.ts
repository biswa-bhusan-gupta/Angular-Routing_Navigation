import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  component = "Card Component";

  public selectedId;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get("id"));
      this.selectedId = id;
    });
  }

  cards = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Ruby" },
    { id: 5, name: "Bootstrap" }
  ];

  onSelect(x) {
    this.router.navigate(["/card", x.id]);
  }

  isSelected(card) {
    return card.id === this.selectedId;
  }
}
