import { Component, Input } from '@angular/core';
import { UserCardData } from '../../interfaces/user-card-data';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() userData!: UserCardData;

}
