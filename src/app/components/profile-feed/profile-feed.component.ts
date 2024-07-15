import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Schedule } from '../../interfaces/entities/schedule';
import { Talent } from '../../interfaces/entities/talent';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';
import { ScheduleService } from '../../services/schedule.service';
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
      tag: new FormControl('', [Validators.required]),
    });

    this.scheduleForm = new FormGroup({
      id: new FormControl(''),
      day: new FormControl('', [Validators.required]),
      timeInit: new FormControl('', [Validators.required]),
      timeEnd: new FormControl('', [Validators.required]),
    });

    this.postList = this.postService.getPosts();
  }
  
  get name(){
    return this.talentForm.get('name')!;
  }

  get description(){
    return this.talentForm.get('description')!;
  }

  get tag(){
    return this.talentForm.get('tag')!;
  }

  get day () {
    return this.scheduleForm.get('day')!;
  }

  get timeInit () {
    return this.scheduleForm.get('timeInit')!;
  }

  get timeEnd () {
    return this.scheduleForm.get('timeEnd')!;
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

  scheduleSubmit(formData: any, formDirective: FormGroupDirective): void {
    if (this.scheduleForm.invalid) {
      return;
    }

    console.log(this.scheduleForm.value);
    this.scheduleForm.value['id'] = this.scheduleLastId;
    this.scheduleLastId++;

    this.scheduleList.push(this.scheduleForm.value);
    console.log(this.scheduleList);

    formDirective.resetForm();
    this.scheduleForm.reset();
  }

  handleRemoveSchedule(scheduleId: number) {
    this.scheduleList = this.scheduleService.removeSchedule(scheduleId, this.scheduleList);
  }
}
