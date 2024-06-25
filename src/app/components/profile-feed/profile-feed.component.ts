import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrl: './profile-feed.component.css'
})
export class ProfileFeedComponent {
  
  talentForm!: FormGroup;
  scheduleForm!: FormGroup;

  

  ngOnInit(): void {
    this.talentForm = new FormGroup({
      id: new FormControl(''),
      talentName: new FormControl('', [Validators.required]),
      talentDescription: new FormControl('', [Validators.required]),
    });

    this.scheduleForm = new FormGroup({
      id: new FormControl(''),
      scheduleDay: new FormControl('', [Validators.required]),
      scheduleTimeInit: new FormControl('', [Validators.required]),
      scheduleTimeEnd: new FormControl('', [Validators.required]),
    });
  }
  
  get talentName(){
    return this.talentForm.get('talentName')!;
  }

  get talentDescription(){
    return this.talentForm.get('talentDescription')!;
  }

  get scheduleDay () {
    return this.scheduleForm.get('scheduleDay')!;
  }

  get scheduleTimeInit () {
    return this.scheduleForm.get('scheduleTimeInit')!;
  }

  get scheduleTimeEnd () {
    return this.scheduleForm.get('scheduleTimeEnd')!;
  }

  talentSubmit(): void {
    console.log("Talent submited");
  }

  scheduleSubmit(): void {
    console.log("Schedule submited");
    
  }
}
