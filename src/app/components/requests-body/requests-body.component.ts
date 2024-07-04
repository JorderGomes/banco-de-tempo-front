import { Component } from '@angular/core';
import { FavorRequest } from '../../interfaces/favor-request';
import { FavorService } from '../../services/favor.service';

@Component({
  selector: 'app-requests-body',
  templateUrl: './requests-body.component.html',
  styleUrl: './requests-body.component.css'
})
export class RequestsBodyComponent {

  favorRequests: FavorRequest[] = [];

  constructor (
    public favorService: FavorService
  ){}

  ngOnInit(): void {
    this.favorRequests = this.favorService.getFavorRequests();
  }

  updateStatus(id: number, newStatus: string){
    this.favorRequests.forEach(currentFavor => {
      if (id === currentFavor.id) {
        currentFavor.status = newStatus;
      }
    });
  }

}
