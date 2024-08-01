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
    },
    {
      urlUserImage: '../../../assets/ignore-assets/user-02.jpeg',
      userName: 'Michael Brown',
      talentName: 'Marketing',
      schedules: new Map<string, number>([
        ["terça-8-12", 1],
        ["quinta-13-17", 2],
        ["sábado-10-13", 3],
        ["domingo-9-11", 4]
      ]),
      qtdHours: 0
    },
    {
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
    },
    {
      urlUserImage: '../../../assets/ignore-assets/user-04.jpeg',
      userName: 'Emily Davis',
      talentName: 'Project Management',
      schedules: new Map<string, number>([
        ["segunda-9-11", 1],
        ["quarta-10-13", 2],
        ["sexta-12-15", 3],
        ["sábado-8-11", 4]
      ]),
      qtdHours: 0
    },
    {
      urlUserImage: '../../../assets/ignore-assets/user-05.jpeg',
      userName: 'David Wilson',
      talentName: 'Data Analysis',
      schedules: new Map<string, number>([
        ["terça-11-14", 1],
        ["quinta-9-12", 2],
        ["sábado-14-17", 3],
        ["domingo-12-15", 4]
      ]),
      qtdHours: 0
    },
    {
      urlUserImage: '../../../assets/ignore-assets/user-04.jpeg',
      userName: 'Emma Johnson',
      talentName: 'Content Writing',
      schedules: new Map<string, number>([
        ["segunda-13-16", 1],
        ["quarta-9-12", 2],
        ["sexta-14-17", 3],
        ["domingo-10-12", 4]
      ]),
      qtdHours: 0
    },
    {
      urlUserImage: '../../../assets/ignore-assets/user-02.jpeg',
      userName: 'James Taylor',
      talentName: 'Photography',
      schedules: new Map<string, number>([
        ["terça-12-15", 1],
        ["quinta-10-13", 2],
        ["sábado-9-11", 3],
        ["domingo-14-16", 4]
      ]),
      qtdHours: 0
    }
  ];

  constructor() { }

  getUserCardData() {
    return this.userCardList;
  }
}
