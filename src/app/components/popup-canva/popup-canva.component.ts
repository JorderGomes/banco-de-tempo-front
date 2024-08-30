import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-canva',
  templateUrl: './popup-canva.component.html',
  styleUrl: './popup-canva.component.css'
})
export class PopupCanvaComponent {

  @Input() currentPopup:string = "";
  @Output() closePopup = new EventEmitter<void>();

  onClose() {
    this.closePopup.emit();
  }


}
