import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgIf, NgFor } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { Product } from './product.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'product.page.html',
  styleUrls: ['product.page.scss'],
  imports: [CommonModule, CurrencyPipe, NgIf, NgFor, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonButtons, IonIcon],
})
export class Tab3Page {
  constructor(private navCtrl: NavController) {}

  products: Product[] = [
    { id: '1', name: 'Smartphone X200', description: 'Latest generation smartphone.', price: 699.76, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300' },
    { id: '2', name: 'Laptop Pro 15', description: 'Powerful laptop for professionals.', price: 1299.59, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300' },
    { id: '3', name: 'DSLR Camera Z7', description: 'Professional camera with 24-70mm lens.', price: 1599.00, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_xm_vCrRf2JAng2cepTQUk4Ib4W4x_lqP3LkIn8rc1DspjcylZxNTxbjp829eZelqDvoKYF4PhUZovtwxLQMtAMQ_wzlFjfX6z8pikXbaaWPHpjJTGDl7eYCp0m8QZ_EaznBq-k4&usqp=CAc' },
    { id: '4', name: 'Popular Suit Set', description: '1 Popular Suit Set, coat, pants, temperament, suit set for men, solid color, solid color slacks, street clothing.', price: 45.24, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXnr827g0jVvzL6uf8UErxaem6a7MtNmFA5UmhZyyGOyztIDufaL_KaPzU2clJFH__y1fDA2EBxfW8OJLsgITgLjbzLhPYutZFYOyp0NJTh3txlIvTn5YouppV66DzesAPcOgePA&usqp=CAc' },
    { id: '5', name: 'Blue King Crown', description: 'Blue crown for men, complete round crystals for men, blue gold color.', price: 249.99, image: 'https://m.media-amazon.com/images/I/71aSO2hUPyL.jpg' },
    { id: '6', name: 'Butterfly Ring', description: 'Elaborated with great detail in sterling silver and gold butterfly motifs.', price: 7.70, image: 'https://image.yfn.com/jewelry/platinum-white-gold-marquise-cut-crystal-butterfly-open-ring-pic142031.png?x-oss-process=image/resize,w_800' },
    { id: '7', name: 'De Plebeya a Princesa: Por una noche en las Vegas: 1 (Realeza)', description: 'The most romantic story that has made over twenty-five million readers laugh, now with its exclusive never-before-published ending.', price: 19.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSi113nrrKruYWG4D0jReKrSnJ_mO89RJFQbDlJqBXsBZJxplyiqnU6GQ62sxZi1Kk-nFzt_eT1OllMjdscXRzAi0U6NekWlsWb4MYSzao' },
    { id: '8', name: 'Memorias del Príncipe Perfecto: 2 (Realeza)', description: 'The most desired novel! if you read the story of Plebeya to Princesa for a night in Las Vegas, you cannot miss how everything happened from the prince Bohdan Vasylyk point of view.', price: 20.34, image: 'https://m.media-amazon.com/images/I/71eqntFDO3L._SY522_.jpg' }
  ];

  logout() {
    // Simular limpieza de datos
    localStorage.clear();
    console.log('User logged out, local storage cleared.');

    // Navegar a login fuera de las pestañas
    this.navCtrl.navigateRoot('/login');
  }
}
