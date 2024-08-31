import { Component, Input } from '@angular/core';
import { UserCardData } from '../../interfaces/user-card-data';
import { Talent } from '../../interfaces/entities/talent';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() talentData!: Talent;

}
