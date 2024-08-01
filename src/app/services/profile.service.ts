import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private balanceSubject = new BehaviorSubject<number>(100); // Iniciando com 100, por exemplo
  balance$ = this.balanceSubject.asObservable();

  constructor() { }

  updateBalance(amount: number) {
    const currentBalance = this.balanceSubject.value;
    this.balanceSubject.next(currentBalance - amount);
  }

}
