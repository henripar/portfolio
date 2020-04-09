import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjektitComponent } from "./projektit/projektit.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: "projektit", component: ProjektitComponent },
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
