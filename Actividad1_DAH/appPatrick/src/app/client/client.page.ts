import { Component, Input, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonButton]
})
export class ClientDetailPage implements OnInit {

  @Input() id?: string;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    console.log("ID del cliente recibido:", this.id);
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs/clients');
  }
}