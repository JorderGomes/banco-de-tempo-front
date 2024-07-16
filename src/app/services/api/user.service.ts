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

  private userKey: string = 'local-user';
  private baseApiUrl:string = environment.baseApiUrl;
  private apiResourceUrl: string = `${this.baseApiUrl}/user`;

  constructor(
    private localStorage: StorageService,
    private http: HttpClient
  ) { }

  async createUser(user: User): Promise<User> {
    const newUser = await lastValueFrom(this.http.post<User>(this.apiResourceUrl, user));
    this.setLocalUser(newUser);
    return newUser;
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiResourceUrl);
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiResourceUrl}/${id}`);
  }

  remove(id: number){
    return this.http.delete<User>(`${this.apiResourceUrl}/${id}`);
  }

  editUser(newUser: User): Observable<User> {
    const url = `${this.apiResourceUrl}/${newUser.id}`;
    return this.http.put<User>(url, newUser);
  }

  private setLocalUser (user:User){
    this.localStorage.setItem(this.userKey, user);
  }

  public getLocalUser() {
    return this.localStorage.getItem(this.userKey);
  }

}
