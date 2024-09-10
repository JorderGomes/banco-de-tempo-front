import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() formSubmitted = new EventEmitter<any>();

  constructor (
    public userCardService: UserCardService
  ){}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      tag: new FormControl('', [Validators.required])
    });
  }

  get tag() {
    return this.searchForm.get('tag')!;
  }

  searchFavor(formData: any, formDirective: FormGroupDirective): void {
    if (this.searchForm.invalid) {
      return;
    }

    this.formSubmitted.emit(this.searchForm.value);

    formDirective.resetForm();
    this.searchForm.reset();
  }

}
