import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { ProjektitComponent } from "./projektit/projektit.component";
import { ProfileComponent } from "./profile/profile.component";
import { LintukotoComponent } from "./lintukoto/lintukoto.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjektitComponent,
    ProfileComponent,
    LintukotoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
