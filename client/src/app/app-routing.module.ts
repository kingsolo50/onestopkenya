import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TodosComponent } from './todos/todos.component';
import * as $ from 'jquery';


const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'todo', component: TodosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
