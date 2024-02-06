import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitDemoComponent } from './git-demo/git-demo.component';

const routes: Routes = [{
  path:"",
  component:GitDemoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
