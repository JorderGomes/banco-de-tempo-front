import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileFeedComponent } from './components/profile-feed/profile-feed.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/pages/feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    ProfileCardComponent,
    ProfileFeedComponent,
    PostComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
