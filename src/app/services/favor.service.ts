import { Injectable } from '@angular/core';
import { FavorRequest } from '../interfaces/favor-request';

@Injectable({
  providedIn: 'root'
})
export class FavorService {

  favorRequests: FavorRequest[] = [
    {
      id: 1,
      userName: "Maria Silva",
      talentName: "Jardinagem",
      day: "Segunda-feira",
      schedule: "09h - 11h",
      qtdHours: 2,
      status: "Pendente",
    },
    {
      id: 2,
      userName: "João Oliveira",
      talentName: "Manutenção de Computadores",
      day: "Terça-feira",
      schedule: "14h - 16h",
      qtdHours: 2,
      status: "Recusada",
    },
    {
      id: 3,
      userName: "Ana Costa",
      talentName: "Aulas de Inglês",
      day: "Quarta-feira",
      schedule: "10h - 12h",
      qtdHours: 2,
      status: "Cancelada",
    },
    {
      id: 4,
      userName: "Carlos Pereira",
      talentName: "Conserto de Eletrodomésticos",
      day: "Quinta-feira",
      schedule: "13h - 15h",
      qtdHours: 2,
      status: "Aceita",
    },
    {
      id: 5,
      userName: "Fernanda Souza",
      talentName: "Aulas de Matemática",
      day: "Sexta-feira",
      schedule: "08h - 10h",
      qtdHours: 2,
      status: "Realizada",
    },
    {
      id: 6,
      userName: "Gustavo Lima",
      talentName: "Consultoria Financeira",
      day: "Sábado",
      schedule: "11h - 13h",
      qtdHours: 2,
      status: "Pendente",
    },
    {
      id: 7,
      userName: "Beatriz Rocha",
      talentName: "Aulas de Violão",
      day: "Domingo",
      schedule: "15h - 17h",
      qtdHours: 2,
      status: "Aceita",
    }
];

  constructor() { }

  getFavorRequests(){
    return this.favorRequests;
  }


}
