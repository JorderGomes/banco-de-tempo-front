import { Injectable } from '@angular/core';
import { Talent } from '../../interfaces/entities/talent';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  private baseApiUrl:string = environment.baseApiUrl;
  private apiResourceUrl: string = `${this.baseApiUrl}/talent`;

  constructor(private http: HttpClient, private userService: UserService) {}

  async createTalent(talent: Talent): Promise<Talent> {
    const userId = this.userService.getLocalUser()!.id;
    const url = `${this.apiResourceUrl}/user/${userId}`;
    const newTalent = await lastValueFrom(this.http.post<Talent>(url, talent));
    return newTalent;
  }

  getTalents(): Observable<Talent[]>{
    return this.http.get<Talent[]>(this.apiResourceUrl);
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

  // removeTalent(id: number, talentList: Talent[]){
  //   return talentList.filter(currentTalent => currentTalent.id !== id);
  // }

}
