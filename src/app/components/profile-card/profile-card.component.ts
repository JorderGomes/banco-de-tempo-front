import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  balance: number = 0;

  constructor(public profileservice: ProfileService) {}

  ngOnInit() {
    this.profileservice.balance$.subscribe((balance) => {
      this.balance = balance;
    });
  }

}
