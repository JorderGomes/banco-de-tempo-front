import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
