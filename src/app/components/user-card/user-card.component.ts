import { Component } from '@angular/core';
import { UserCardData } from '../../interfaces/user-card-data';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  userTest: UserCardData = {
    urlUserImage: '../../../assets/ignore-assets/user-03.jpeg',
    userName: 'John Doe',
    talentName: 'Programming',
    schedules: new Map<string, number>([
      ["quarta-12-15", 1],
      ["terça-9-6", 2],
      ["sábado-13-2", 3],
      ["sexta-1-21", 4]
    ]),
    qtdHours: 0 
  };

}
