import { Injectable } from '@angular/core';
import { UserCardData } from '../interfaces/user-card-data';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {

  userCardList: UserCardData[] = [
    {
      urlUserImage: '../../../assets/ignore-assets/user-01.jpeg',
      userName: 'Jane Smith',
      talentName: 'Design',
      schedules: new Map<string, number>([
        ["segunda-10-14", 1],
        ["quarta-14-18", 2],
        ["sexta-9-12", 3],
        ["domingo-10-13", 4]
      ]),
      qtdHours: 0
    }
  ];

  constructor() { }

  getUserCardData() {
    return this.userCardList;
  }
}
