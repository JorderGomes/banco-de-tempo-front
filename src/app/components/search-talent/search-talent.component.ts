import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { UserCardService } from '../../services/user-card.service';


@Component({
  selector: 'app-search-talent',
  templateUrl: './search-talent.component.html',
  styleUrl: './search-talent.component.css'
})
export class SearchTalentComponent {

  searchForm!: FormGroup;
  faMagnifyingGlass = faMagnifyingGlass;

  constructor (
    public userCardService: UserCardService
  ){}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      tag: new FormControl('', [Validators.required]),
      day: new FormControl('', [Validators.required]),
      timeInit: new FormControl('', [Validators.required]),
    });

    // this.userDataList = this.userCardService.getUserCardData();

  }

  get day() {
    return this.searchForm.get('day')!;
  }

  get timeInit() {
    return this.searchForm.get('timeInit')!;
  }

  get tag() {
    return this.searchForm.get('tag')!;
  }

  searchFavor(formData: any, formDirective: FormGroupDirective): void {
    if (this.searchForm.invalid) {
      return;
    }

    console.log(this.searchForm.value);
    console.log(formData);

    formDirective.resetForm();
    this.searchForm.reset();
  }

}
