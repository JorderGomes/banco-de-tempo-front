import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  popupCanvaIsVisible:boolean = false;

  togglePopup(){
    this.popupCanvaIsVisible = !this.popupCanvaIsVisible;
  }

}
