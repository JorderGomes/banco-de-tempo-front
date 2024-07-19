import { Component, EventEmitter, Output} from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../interfaces/entities/user';
import { UserService } from '../../services/api/user.service';

@Component({
  selector: 'app-popup-edit-profile',
  templateUrl: './popup-edit-profile.component.html',
  styleUrl: './popup-edit-profile.component.css'
})
export class PopupEditProfileComponent {
  
  @Output() closePopup = new EventEmitter<void>();
  faClose = faClose;
  currentUser: User = this.userService.getLocalUser()!;

  emailValid: boolean = false;
  userEmail: string = "";

  passwordConfirmed: boolean = false;
  newPassword: string = "";
  confirmPassword: string = "";

  constructor(public userService: UserService){}
  
  ngOnInit(){

  }

  onClickClose() {
    this.closePopup.emit();
  }

  verifyEmail(e: Event): void {
    this.emailValid = this.userEmail === this.currentUser.email;
  }

  verifyNewPassword(){
    this.passwordConfirmed = (this.newPassword === this.confirmPassword) && (this.newPassword !== "");
  }

  async deleteAccount() {
    await this.userService.removeUser(this.currentUser.id!).subscribe();
    this.userEmail = "";
  }

  async updatePassword(){
    await this.userService.updatePassword(this.currentUser.id!, this.newPassword).subscribe();
    this.newPassword = "";
    this.confirmPassword = "";
  }    

}
