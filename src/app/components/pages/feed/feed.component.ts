import { Component } from '@angular/core';
import { UserCardData } from '../../../interfaces/user-card-data';
import { UserCardService } from '../../../services/user-card.service';
import { faGears } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

  userDataList: UserCardData[] = [];
  searchData: any[] = [];
  faIcon = faGears;

  constructor (public userCardService: UserCardService){}

  ngOnInit(): void {

    this.userDataList = this.userCardService.getUserCardData();

  }

  handleFormSubmittion(data: any){
    this.searchData.push(data);
    console.log("handleFormSubmition");
  }

  showData(){
    console.log(this.searchData);
  }

}
