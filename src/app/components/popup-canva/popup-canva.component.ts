import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-canva',
  templateUrl: './popup-canva.component.html',
  styleUrl: './popup-canva.component.css'
})
export class PopupCanvaComponent {

  @Input() currentPopup:string = "";

}
