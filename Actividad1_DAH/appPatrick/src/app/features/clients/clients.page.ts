import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonCardHeader, IonButton, IonAvatar, IonIcon } from '@ionic/angular/standalone';
import { Client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonCardHeader, IonButton, IonAvatar, IonIcon, RouterLink],
})
export class ClientsPage {
  constructor() {}
  
  clients: Client[] = [
    { id: '1', name: 'Williams Queen', email: 'williams.queen@example.com', phone: '123-456-7890', image: 'https://media.istockphoto.com/id/544358212/es/foto/feliz-sonriente-hombre.jpg?s=612x612&w=0&k=20&c=yv1CNOh_ccEfyGFqHHZo1UFaFNqTP6J2fJ5xBW1C6Oo=' },
    { id: '2', name: 'Alex Anderson', email: 'alex.anderson@example.com', phone: '098-765-4321', image: 'https://img.freepik.com/foto-gratis/retrato-hermosa-modelo-rubia-sonriente-vestida-ropa-hipster-verano_158538-5482.jpg' },
    { id: '3', name: 'Henry Royals', email: 'henry.royals@example.com', phone: '555-123-4567', image: 'https://img.freepik.com/fotos-premium/fotografia-completa-hombre-confiado-pie-casualmente_1106493-165026.jpg?semt=ais_hybrid&w=740&q=80' },
    { id: '4', name: 'Sam Adams', email: 'sam.adams@example.com', phone: '555-987-6543', image: 'https://img.freepik.com/foto-gratis/retrato-joven-mujer-bonita-sonriendo-camiseta-blanca-feliz-estado-animo-positivo-sonrisa-aislada-sincera-cabello-largo_285396-771.jpg?semt=ais_rp_50_assets&w=740&q=80' },
  ];
}

