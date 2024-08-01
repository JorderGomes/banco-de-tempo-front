import { Component, EventEmitter, Output } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { UserService } from '../../services/api/user.service';
import { User } from '../../interfaces/entities/user';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  @Output() togglePopupEvent = new EventEmitter<void>();
  balance: number = 0;
  userData: User | null = null;

  constructor(
    public profileservice: ProfileService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.profileservice.balance$.subscribe((balance) => {
      this.balance = balance;
    });

    this.userData = this.userService.getLocalUser();
  }

  onEditProfileClick() {
    this.togglePopupEvent.emit();
  }
 
}
