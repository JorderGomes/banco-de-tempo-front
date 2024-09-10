// import { UserService } from '../../services/api/user.service';
// import { UserCardData } from '../../interfaces/user-card-data';

import { Component, Input } from '@angular/core';
import { Talent } from '../../interfaces/entities/talent';
import { ScheduleService } from '../../services/api/schedule.service';
import { User } from '../../interfaces/entities/user';
import { UserService } from '../../services/api/user.service';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  
  @Input() talentData!: Talent;
  requestForm!: FormGroup;
  currentUser: User = this.userService.getLocalUser()!;
  
  constructor(
    public scheduleService: ScheduleService,
    public userService: UserService
  ){}

  ngOnInit(): void {
    this.requestForm = new FormGroup({
      applicantId: new FormControl(this.currentUser.id),
      requiredId: new FormControl(this.talentData.user.id),
      talentId: new FormControl(this.talentData.id),
      
      scheduleId: new FormControl('', [Validators.required]),
      qtdHours: new FormControl('', [Validators.required])
    });
  }

  get applicantId() {
    return this.requestForm.get('applicantId')!;
  }
  get requiredId() {
    return this.requestForm.get('requiredId')!;
  }
  get talentId() {
    return this.requestForm.get('talentId')!;
  }
  get scheduleId() {
    return this.requestForm.get('scheduleId')!;
  }
  get qtdHours() {
    return this.requestForm.get('qtdHours')!;
  }

  requestFavor(formData: any, formDirective: FormGroupDirective){
    console.log(this.requestForm.value);
    
    formDirective.resetForm();
    this.requestForm.reset();
  }



}
