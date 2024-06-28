import { Injectable } from '@angular/core';
import { Schedule } from '../interfaces/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  
  constructor() { }

  removeSchedule(id: number, scheduleList: Schedule[] ): Schedule[] {
    return scheduleList.filter(currentSchedule => currentSchedule.id !== id);
  }

}
