import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonLabel, IonInput, IonItem } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { Reservation } from './reservation.model';
import { ReservationService } from '../core/services/reservation.service';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.page.html',
  styleUrls: ['./new-reservation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonInput, IonItem]
})
export class NewReservationPage implements OnInit {

  reservation: Reservation = {
    id: '',
    name: '',
    date: new Date()
  };

  constructor(private navCtrl: NavController, private reservationService: ReservationService) {}

  ngOnInit() {}

  saveReservation() {
    if (this.reservation.name && this.reservation.date) {
      const newReservation: Reservation = {
        id: '',
        name: this.reservation.name,
        date: new Date(this.reservation.date)
      };
      this.reservationService.addReservation(newReservation);
      // Reset form
      this.reservation = { id: '', name: '', date: new Date() };
      // Navigate back or to a list
      this.navCtrl.navigateBack('/tabs/reservations');
    }
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs/reservations');
  }

  goToReservations() {
    this.navCtrl.navigateForward('/tabs/reservations');
  }
}
