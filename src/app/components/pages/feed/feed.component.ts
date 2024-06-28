import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

  searchForm!: FormGroup;

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      tag: new FormControl('', [Validators.required]),
      day: new FormControl('', [Validators.required]),
      timeInit: new FormControl('', [Validators.required]),
    });
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
