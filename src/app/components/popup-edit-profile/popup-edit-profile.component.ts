import { Component, EventEmitter, Output} from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup-edit-profile',
  templateUrl: './popup-edit-profile.component.html',
  styleUrl: './popup-edit-profile.component.css'
})
export class PopupEditProfileComponent {
  
  @Output() closePopup = new EventEmitter<void>();
  faClose = faClose;
  
  onClickClose() {
    this.closePopup.emit();
  }

}
