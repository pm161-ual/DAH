import { Injectable } from '@angular/core';
import { Reservation } from '../../new-reservation/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    // Load from localStorage if available
    const stored = localStorage.getItem('reservations');
    if (stored) {
      const parsed = JSON.parse(stored);
      this.reservations = parsed.map((r: any) => ({ ...r, date: new Date(r.date) }));
    }
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString(); // Simple ID generation
    this.reservations.push(reservation);
    this.saveToStorage();
  }

  private saveToStorage(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}