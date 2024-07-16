import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { User } from '../../../interfaces/entities/user';
import { UserService } from '../../../services/api/user.service';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  faClock = faClock;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGoogle = faGoogle;

  createUserForm!: FormGroup;
  currentUser: User | null = null;

  constructor (
    public userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    

    
  }

  get name(){
    return this.createUserForm.get('name')!;
  }

  get email(){
    return this.createUserForm.get('email')!;
  }

  get password(){
    return this.createUserForm.get('password')!;
  }

  public async createUser(formData: any, formDirective: FormGroupDirective): Promise<void> {
    if (this.createUserForm.invalid) {
      return;
    }

    try {
      const newUser = await this.userService.createUser(this.createUserForm.value);
      console.log('User created and saved locally:', newUser);
      this.router.navigate(['/feed']);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  
    formDirective.resetForm();
    this.createUserForm.reset();
  }

}
