import { Component } from '@angular/core';
import { FavorRequest } from '../../interfaces/favor-request';
import { FavorService } from '../../services/favor.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-requests-body',
  templateUrl: './requests-body.component.html',
  styleUrl: './requests-body.component.css'
})
export class RequestsBodyComponent {

  favorRequests: FavorRequest[] = [];

  constructor(
    public favorService: FavorService,
    public profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.favorRequests = this.favorService.getFavorRequests();
  }

  updateStatus(id: number, newStatus: string, qtdHours?: number) {
    if (newStatus === 'Finalizada') {
      if (qtdHours) {
        this.profileService.updateBalance(qtdHours);
      } else {
        return;
      }
    }

    this.favorRequests.forEach(currentFavor => {
      if (id === currentFavor.id) {
        currentFavor.status = newStatus;
      }
    });


  }

}
