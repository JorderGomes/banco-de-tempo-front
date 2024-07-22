import { Injectable } from '@angular/core';
import { User } from '../../interfaces/entities/user';
import { StorageService } from '../storage.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  removeUser(id: number){
    const url = `${this.apiResourceUrl}/${id}`;
    return this.http.delete(url);
  }

  editUser(newUser: User): Observable<User> {
    const url = `${this.apiResourceUrl}/${newUser.id}`;
    return this.http.put<User>(url, newUser);
  }

  updatePassword(id: number, newPassword: string){
    const url = `${this.apiResourceUrl}/${id}/update-password?newPassword=${newPassword}`;
    return this.http.patch(url, {});
  }

  public setLocalUser (user:User){
    this.localStorage.setItem(this.userKey, user);
  }

  public getLocalUser() {
    // user: User = this.localStorage.getItem<User>();
    return this.localStorage.getItem<User>(this.userKey);
  }

}
