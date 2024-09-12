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
  private baseApiUrl: string = environment.baseApiUrl;
  private apiResourceUrl: string = `${this.baseApiUrl}/user`;
  private localUser: User = {
    "id": 7,
    "name": "Delinda",
    "email": "dmccay6@google.ru",
    "password": "c9169aeadc40b87920184c427ba87535cea19b79775f9d46948e965f41fdc6b1",
    "balance": 63,
    "schedules": [
      {
          "id": 4,
          "weekDay": "SEXTA",
          "timeBeguin": "05:00:00",
          "timeEnd": "12:00:00",
          "qtdHours": 7
      },
      {
          "id": 6,
          "weekDay": "SEGUNDA",
          "timeBeguin": "05:00:00",
          "timeEnd": "17:00:00",
          "qtdHours": 12
      },
      {
          "id": 9,
          "weekDay": "TERÇA",
          "timeBeguin": "14:00:00",
          "timeEnd": "16:00:00",
          "qtdHours": 2
      },
      {
          "id": 31,
          "weekDay": "QUINTA",
          "timeBeguin": "18:24:00",
          "timeEnd": "19:24:00",
          "qtdHours": 1
      },
      {
          "id": 32,
          "weekDay": "DOMINGO",
          "timeBeguin": "18:25:00",
          "timeEnd": "20:25:00",
          "qtdHours": 2
      }
  ]
  };

  constructor(
    private localStorage: StorageService,
    private http: HttpClient
  ) { }

  async createUser(user: User): Promise<User> {
    const newUser = await lastValueFrom(this.http.post<User>(this.apiResourceUrl, user));
    this.setLocalUser(newUser);
    return newUser;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiResourceUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiResourceUrl}/${id}`);
  }

  removeUser(id: number) {
    const url = `${this.apiResourceUrl}/${id}`;
    return this.http.delete(url);
  }

  editUser(newUser: User): Observable<User> {
    const url = `${this.apiResourceUrl}/${newUser.id}`;
    return this.http.put<User>(url, newUser);
  }

  updatePassword(id: number, newPassword: string) {
    const url = `${this.apiResourceUrl}/${id}/update-password?newPassword=${newPassword}`;
    return this.http.patch(url, {});
  }

  public setLocalUser(user: User) {
    this.localStorage.setItem(this.userKey, user);
  }

  public getLocalUser() {
    return this.localUser; //this.localStorage.getItem<User>(this.userKey);
  }

}
