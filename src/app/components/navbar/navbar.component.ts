import { Component } from '@angular/core';
import { faUser, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  faUser = faUser;
  faBell = faBell;
  faMessage = faMessage;
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
