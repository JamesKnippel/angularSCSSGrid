import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../app/landing/landing.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'test', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
