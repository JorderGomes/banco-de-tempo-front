import { Injectable } from '@angular/core';
import { User } from '../../interfaces/entities/user';
import { StorageService } from '../storage.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userKey: string = '';
  private baseApiUrl:string = environment.baseApiUrl;
  private apiUrl: string = `${this.baseApiUrl}/user`;

  constructor(
    private localStorage: StorageService,
    private http: HttpClient
  ) { }

  async createUser(user: User): Promise<User> {
    const newUser = await lastValueFrom(this.http.post<User>(this.apiUrl, user));
    this.setLocalUser(newUser);
    return newUser;
  }

  private setLocalUser (user:User){
    this.userKey = `user-${user.id!}`;
    this.localStorage.setItem(this.userKey, user);
  }

  public getLocalUser() {
    return this.localStorage.getItem(this.userKey);
  }

}
