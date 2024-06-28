import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  faClock = faClock;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGoogle = faGoogle;

}
