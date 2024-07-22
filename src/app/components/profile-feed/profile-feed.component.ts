import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Schedule } from '../../interfaces/entities/schedule';
import { Talent } from '../../interfaces/entities/talent';
import { Post } from '../../interfaces/post';
import { TalentService } from '../../services/api/talent.service';
import { PostsService } from '../../services/posts.service';
import { ScheduleService } from '../../services/schedule.service';

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
      day: new FormControl('', [Validators.required]),
      timeInit: new FormControl('', [Validators.required]),
      timeEnd: new FormControl('', [Validators.required]),
    });

    // this.postList = this.postService.getPosts(); - 
    this.talentService.getTalents().subscribe(talentsData => this.talentList = talentsData);
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

  get day () {
    return this.scheduleForm.get('day')!;
  }

  get timeInit () {
    return this.scheduleForm.get('timeInit')!;
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
