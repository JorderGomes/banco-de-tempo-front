import { Component } from '@angular/core';
import { FavorRequest } from '../../interfaces/favor-request';

import { ProfileService } from '../../services/profile.service';
import { FavorService } from '../../services/api/favor.service';
import { Favor } from '../../interfaces/entities/favor';

@Component({
  selector: 'app-requests-body',
  templateUrl: './requests-body.component.html',
  styleUrl: './requests-body.component.css'
})
export class RequestsBodyComponent {

  favorRequests: Favor[] = [];

  constructor(
    public favorService: FavorService,
    public profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.favorService.getFavorRequests().subscribe(result => {
      this.favorRequests = result
    });
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
        currentFavor.statusFavor = newStatus;
      }
    });


  }

}
