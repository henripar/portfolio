import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-projektit",
  templateUrl: "./projektit.component.html",
  styleUrls: ["./projektit.component.css"],
})
export class ProjektitComponent implements OnInit {
  url = environment.url;

  constructor() {}

  ngOnInit() {}
}
