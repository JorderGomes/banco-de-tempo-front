import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

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
import { UserCardComponent } from './components/user-card/user-card.component';
import { RequestsBodyComponent } from './components/requests-body/requests-body.component';
import { PopupCanvaComponent } from './components/popup-canva/popup-canva.component';
import { PopupEditProfileComponent } from './components/popup-edit-profile/popup-edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    ProfileCardComponent,
    ProfileFeedComponent,
    PostComponent,
    FeedComponent,
    UserCardComponent,
    RequestsBodyComponent,
    PopupCanvaComponent,
    PopupEditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
