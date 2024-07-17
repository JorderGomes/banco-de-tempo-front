import { Component, EventEmitter, Output } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  @Output() togglePopupEvent = new EventEmitter<void>();
  balance: number = 0;

  constructor(public profileservice: ProfileService) {}

  ngOnInit() {
    this.profileservice.balance$.subscribe((balance) => {
      this.balance = balance;
    });
  }

  onEditProfileClick() {
    this.togglePopupEvent.emit();
  }
 
}
