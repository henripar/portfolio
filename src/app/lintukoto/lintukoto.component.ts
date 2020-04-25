import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-lintukoto",
  templateUrl: "./lintukoto.component.html",
  styleUrls: ["./lintukoto.component.css"],
})
export class LintukotoComponent implements OnInit {
  url = environment.url;

  constructor() {}

  ngOnInit() {}
}
