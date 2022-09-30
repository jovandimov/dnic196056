import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompilerComponent} from './compiler/compiler.component';
import {ExamplesComponent} from './examples/examples.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {TutorialInfoComponent} from './tutorial-info/tutorial-info.component';
import {TutorialsComponent} from './tutorials/tutorials.component';
import {CodeEditorModule} from '@ngstack/code-editor';

@NgModule({
  declarations: [
    AppComponent,
    CompilerComponent,
    ExamplesComponent,
    NavBarComponent,
    SideBarComponent,
    TutorialInfoComponent,
    TutorialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodeEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
