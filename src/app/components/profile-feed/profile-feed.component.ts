import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Schedule } from '../../interfaces/entities/schedule';
import { Talent } from '../../interfaces/entities/talent';
import { Post } from '../../interfaces/post';
import { ScheduleService } from '../../services/api/schedule.service';
import { TalentService } from '../../services/api/talent.service';
import { PostsService } from '../../services/posts.service';

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
  scheduleLastId: number = 1;

  talentList: Talent[] = [];
  scheduleList: Schedule[] = [];
  postList: Post[] = [];

  constructor (
    public talentService: TalentService,
    public scheduleService: ScheduleService,
    public postService: PostsService
  ) {}
  
  ngOnInit(): void {
    this.talentForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });

    this.scheduleForm = new FormGroup({
      id: new FormControl(''),
      weekDay: new FormControl('', [Validators.required]),
      timeBeguin: new FormControl('', [Validators.required]),
      timeEnd: new FormControl('', [Validators.required]),
    });

    // this.postList = this.postService.getPosts(); - 
    this.talentService.getTalents().subscribe(
      talentsData => this.talentList = talentsData
    );
    
    this.scheduleService.getSchedules().subscribe(
      schedulesData => {
        console.log(schedulesData);
        this.scheduleList = schedulesData;
      }
    );
  }
  
  get name(){
    return this.talentForm.get('name')!;
  }

  get description(){
    return this.talentForm.get('description')!;
  }

  get category(){
    return this.talentForm.get('category')!;
  }

  get weekDay () {
    return this.scheduleForm.get('weekDay')!;
  }

  get timeBeguin () {
    return this.scheduleForm.get('timeBeguin')!;
  }

  get timeEnd () {
    return this.scheduleForm.get('timeEnd')!;
  }

  async talentSubmit(formData: any, formDirective: FormGroupDirective) {
    if (this.talentForm.invalid) {
      return;
    }

    const newTalent = await this.talentService.createTalent(this.talentForm.value);
    this.talentList.push(newTalent);

    formDirective.resetForm();
    this.talentForm.reset();
  }

  handleRemoveTalent(talentId: number){
    this.talentService.removeTalent(talentId).subscribe();
    this.talentList = this.talentList.filter((t) => t.id !== talentId);
  }

  async scheduleSubmit(formData: any, formDirective: FormGroupDirective) {
    if (this.scheduleForm.invalid) {
      return;
    }

    const newSchedule: Schedule = this.scheduleForm.value;

    newSchedule.timeBeguin = newSchedule.timeBeguin.concat(":00");
    newSchedule.timeEnd = newSchedule.timeEnd.concat(":00");

    console.log(newSchedule);

    const savedSchedule = await this.scheduleService.createSchedule(newSchedule);
    this.scheduleList.push(savedSchedule);
    console.log(this.scheduleList);

    formDirective.resetForm();
    this.scheduleForm.reset();
  }

  handleRemoveSchedule(scheduleId: number) {
    this.scheduleService.removeSchedule(scheduleId).subscribe();
    this.scheduleList = this.scheduleList.filter((s) => s.id !== scheduleId);
  }
}
