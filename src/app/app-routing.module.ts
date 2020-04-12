import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjektitComponent } from "./projektit/projektit.component";
import { ProfileComponent } from "./profile/profile.component";
import { LintukotoComponent } from "./lintukoto/lintukoto.component";
import { PictockerComponent } from "./pictocker/pictocker.component";

const routes: Routes = [
  { path: "projektit", component: ProjektitComponent },
  { path: "profile", component: ProfileComponent },
  { path: "lintukoto", component: LintukotoComponent },
  { path: "", component: ProfileComponent },
  { path: "picstocker", component: PictockerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
