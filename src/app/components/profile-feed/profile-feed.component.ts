import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Talent } from '../../interfaces/talent';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TalentService } from '../../services/talent.service';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrl: './profile-feed.component.css'
})
export class ProfileFeedComponent {
  
  talentForm!: FormGroup;
  scheduleForm!: FormGroup;
  faTrash = faTrash;

  talentLastId: number = 1;

  talentList: Talent[] = [];

  constructor (
    public talentService: TalentService
  ) {}
  
  ngOnInit(): void {
    this.talentForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });

    this.scheduleForm = new FormGroup({
      id: new FormControl(''),
      scheduleDay: new FormControl('', [Validators.required]),
      scheduleTimeInit: new FormControl('', [Validators.required]),
      scheduleTimeEnd: new FormControl('', [Validators.required]),
    });
  }
  
  get name(){
    return this.talentForm.get('name')!;
  }

  get description(){
    return this.talentForm.get('description')!;
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

  talentSubmit(formData: any, formDirective: FormGroupDirective): void {
    if (this.talentForm.invalid) {
      return;
    }

    console.log(this.talentForm.value);
    this.talentForm.value['id'] = this.talentLastId;
    this.talentLastId++;
    
    this.talentList.push(this.talentForm.value);
    console.log(this.talentList);

    formDirective.resetForm();
    this.talentForm.reset();
  }

  handleRemoveTalent(talentId: number){
    this.talentList = this.talentService.removeTalent(talentId, this.talentList);
  }

  scheduleSubmit(): void {
    console.log("Schedule submited");
    
  }
}
