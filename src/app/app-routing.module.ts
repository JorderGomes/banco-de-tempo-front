import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { FeedComponent } from './components/pages/feed/feed.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
