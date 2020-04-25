import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-kurssit",
  templateUrl: "./kurssit.component.html",
  styleUrls: ["./kurssit.component.css"],
})
export class KurssitComponent implements OnInit {
  url = environment.url;

  constructor() {}

  ngOnInit(): void {}
}
