import { Injectable } from '@angular/core';
import { Talent } from '../../interfaces/entities/talent';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  private baseApiUrl:string = process.env['BASE_API_URL']!; //environment.baseApiUrl;
  private apiResourceUrl: string = `${this.baseApiUrl}/talent`;
  talentList = [];
  // userId = 

  constructor(private http: HttpClient, private userService: UserService) {}

  async createTalent(talent: Talent): Promise<Talent> {
    const userId = this.userService.getLocalUser()!.id;
    const url = `${this.apiResourceUrl}/user/${userId}`;
    const newTalent = await lastValueFrom(this.http.post<Talent>(url, talent));
    return newTalent;
  }

  getTalents(): Observable<Talent[]> {
    const user =  this.userService.getLocalUser();
    let userId;
    if (user === null) {
      userId = 0;
    } else {
      userId = user!.id;
    }
    const url = `${this.apiResourceUrl}/user/${userId}`;
    return this.http.get<Talent[]>(url) ;
    // return userList;
  }
  
  searchTalents(tag: string): Observable<Talent[]>{
    const uri = `${this.apiResourceUrl}`;
    let params = new HttpParams();
    params = params.append("category", tag);
    // params = params.append("name", "a");
    return this.http.get<Talent[]>(uri, {params});
  }

  getTalent(id: number): Observable<Talent>{
    return this.http.get<Talent>(`${this.apiResourceUrl}/${id}`);
  }
  
  removeTalent(id: number){
    const url = `${this.apiResourceUrl}/${id}`;
    return this.http.delete(url);
  }
  
  editTalent(newTalent: Talent): Observable<Talent> {
    const url = `${this.apiResourceUrl}/${newTalent.id}`;
    return this.http.put<Talent>(url, newTalent);
  }

}
