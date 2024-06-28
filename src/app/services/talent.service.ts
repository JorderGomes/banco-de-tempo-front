import { Injectable } from '@angular/core';
import { Talent } from '../interfaces/talent';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  constructor() { }

  removeTalent(id: number, talentList: Talent[]){
    return talentList.filter(currentTalent => currentTalent.id !== id);
  }

}
