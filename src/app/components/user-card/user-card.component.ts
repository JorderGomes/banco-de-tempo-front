// import { UserService } from '../../services/api/user.service';
// import { UserCardData } from '../../interfaces/user-card-data';

import { Component, Input } from '@angular/core';
import { Talent } from '../../interfaces/entities/talent';
import { ScheduleService } from '../../services/api/schedule.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  
  @Input() talentData!: Talent;
  
  constructor(
    public scheduleService: ScheduleService
  ){}

  getSchedules(userId: number) {
    console.log(this.talentData);
    if (!this.talentData.user.schedules){
      this.scheduleService.searchSchedule(userId).subscribe((result) => {
        console.log(result);
        this.talentData.user.schedules = result;
      });
    }
  }

}
