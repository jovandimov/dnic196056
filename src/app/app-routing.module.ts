import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorialsComponent} from "./tutorials/tutorials.component";
import {TutorialInfoComponent} from "./tutorial-info/tutorial-info.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {ExamplesComponent} from "./examples/examples.component";
import {CompilerComponent} from "./compiler/compiler.component";

const routes: Routes = [
  {path: "tutorials", component: TutorialsComponent},
  {path: "tutorial-info", component: TutorialInfoComponent},
  {path: "examples", component: ExamplesComponent},
  {path: "compiler", component: CompilerComponent},
  {path: "", redirectTo: '/tutorials', pathMatch: "full"},
  {path: "**", redirectTo: '/tutorials', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
