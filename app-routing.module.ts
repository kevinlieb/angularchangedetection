import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangemeComponent } from './changeme/changeme.component';

const routes: Routes = [
  { path: '', component: ChangemeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
