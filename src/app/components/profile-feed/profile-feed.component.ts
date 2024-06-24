import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrl: './profile-feed.component.css'
})
export class ProfileFeedComponent {
  
  talentForm!: FormGroup;

  ngOnInit(): void {
    
  }
  
  talentSubmit() {
    alert("Talent submited");
    console.log("Talent submited");
  }
}
