// import { UserService } from '../../services/api/user.service';
// import { UserCardData } from '../../interfaces/user-card-data';

import { Component, Input } from '@angular/core';
import { Talent } from '../../interfaces/entities/talent';
import { ScheduleService } from '../../services/api/schedule.service';
import { User } from '../../interfaces/entities/user';
import { UserService } from '../../services/api/user.service';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FavorService } from '../../services/api/favor.service';
import { Favor } from '../../interfaces/entities/favor';

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
    public userService: UserService,
    public favorService: FavorService
  ){}

  ngOnInit(): void {
    this.requestForm = new FormGroup({
      applicant: new FormControl(this.currentUser),
      required: new FormControl(this.talentData.user),
      talent: new FormControl(this.talentData),
      
      schedule: new FormControl({}, [Validators.required]),
      qtdHours: new FormControl('', [Validators.required])
    });
  }

  get applicant() {
    return this.requestForm.get('applicant')!;
  }
  get required() {
    return this.requestForm.get('required')!;
  }
  get talent() {
    return this.requestForm.get('talent')!;
  }
  get schedule() {
    return this.requestForm.get('schedule')!;
  }
  get qtdHours() {
    return this.requestForm.get('qtdHours')!;
  }

  requestFavor(formData: any, formDirective: FormGroupDirective){
    const favor: Favor = this.requestForm.value;
    console.log(favor);
    this.favorService.postFavorRequest(favor).subscribe(result => {
      console.log(result);
    });

    formDirective.resetForm();
    this.requestForm.reset();
  }



}

