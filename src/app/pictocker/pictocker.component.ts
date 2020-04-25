import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-pictocker",
  templateUrl: "./pictocker.component.html",
  styleUrls: ["./pictocker.component.css"],
})
export class PictockerComponent implements OnInit {
  url = environment.url;

  constructor() {}

  ngOnInit(): void {}
}
