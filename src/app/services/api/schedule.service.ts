import { Injectable } from '@angular/core';
import { Schedule } from '../../interfaces/entities/schedule';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { lastValueFrom, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  
  // private baseApiUrl:string = process.env['BASE_API_URL']!; // environment.baseApiUrl;
  private baseApiUrl: string = environment.baseApiUrl;
  
  private apiResourceUrl: string = `${this.baseApiUrl}/schedule`;
  scheduleList = [];
  
  constructor (
    private http: HttpClient,
    private userService: UserService
  ) { }

  async createSchedule(talent: Schedule): Promise<Schedule> {
    const userId = this.userService.getLocalUser()!.id;
    const url = `${this.apiResourceUrl}/user/${userId}`;
    const newSchedule = await lastValueFrom(this.http.post<Schedule>(url, talent));
    return newSchedule;
  }

  getSchedules(): Observable<Schedule[]> {
    let userId = this.getLocalUserId();
    return this.searchSchedule(userId);
  }

  getLocalUserId(){
    const user =  this.userService.getLocalUser();
    if (user === null) {
      return 0;
    } else {
      return user.id!;
    }
  }

  searchSchedule(userId: number){
    const url = `${this.apiResourceUrl}/user/${userId}`;
    return this.http.get<Schedule[]>(url);
  }

  getSchedule(id: number): Observable<Schedule>{
    return this.http.get<Schedule>(`${this.apiResourceUrl}/${id}`);
  }
  
  removeSchedule(id: number){
    const url = `${this.apiResourceUrl}/${id}`;
    return this.http.delete(url);
  }
  
  editSchedule(newSchedule: Schedule): Observable<Schedule> {
    const url = `${this.apiResourceUrl}/${newSchedule.id}`;
    return this.http.put<Schedule>(url, newSchedule);
  }

}
