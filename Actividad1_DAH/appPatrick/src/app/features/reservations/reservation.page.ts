import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, IonList, IonItem } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { ReservationService } from '../../core/services/reservation.service';
import { Reservation } from '../../new-reservation/reservation.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'reservation.page.html',
  styleUrls: ['reservation.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent,IonLabel, IonButton, IonList, IonItem, DatePipe]
})
export class ReservationPage implements OnInit {

  reservations: Reservation[] = [];

  constructor(private navCtrl: NavController, private reservationService: ReservationService) {}

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    this.reservations = this.reservationService.getReservations();
  }

  goToNewReservation() {
    this.navCtrl.navigateForward('/new-reservation');
  }
}
