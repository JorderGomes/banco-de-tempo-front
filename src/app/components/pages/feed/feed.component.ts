import { Component } from '@angular/core';
import { UserCardData } from '../../../interfaces/user-card-data';
import { UserCardService } from '../../../services/user-card.service';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { TalentService } from '../../../services/api/talent.service';
import { Talent } from '../../../interfaces/entities/talent';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

  userDataList: UserCardData[] = [];
  searchData: Talent[] = [];
  faIcon = faGears;

  constructor (
    public userCardService: UserCardService,
    public talentService: TalentService
  ){}

  ngOnInit(): void {

    this.userDataList = this.userCardService.getUserCardData();

  }

  handleFormSubmittion(data: any){
    this.talentService.searchTalents(data['tag']).subscribe((result) => {
      console.log(result);
      
      this.searchData = result;
    });
  }

  showData(){
    console.log(this.searchData);
  }

}
