import { Injectable } from '@angular/core';
import { UserCardData } from '../interfaces/user-card-data';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {

  userCardList: UserCardData[] = [];

  constructor() { }

  getUserCardData() {
    return this.userCardList;
  }
}
