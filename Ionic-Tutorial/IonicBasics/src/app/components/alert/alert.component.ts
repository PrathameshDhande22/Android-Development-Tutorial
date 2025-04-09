import { Component, inject, OnInit } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: false,
})
export class AlertComponent implements OnInit {
  // inject the alert controller to create the async alert
  alertController: AlertController = inject(AlertController);
  constructor() {}

  // alert buttons
  alertbuttons: AlertButton[] = [
    {
      text: 'OK',
      role: 'destructive',
      // alert button handler
      handler(value) {
        console.log('OK clicked');
      },
    },
    {
      text: 'Cancel',
      role: 'destructive',
    },
  ];

  ngOnInit() {}

  async createAlert() {
    // create the alert using the controller
    const alert = await this.alertController.create({
      buttons: ['OK', 'Cancel'],
      header: 'Controller Alert',
      message: 'These is an Alert message',
    });

    await alert.present();
  }

  actionperformed(event: any) {
    console.log(event);
  }
}
