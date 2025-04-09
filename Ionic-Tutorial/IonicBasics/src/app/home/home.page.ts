import { Component, OnInit, ViewChild } from '@angular/core';
import { App } from '@capacitor/app';
import { IonContent, Platform, ToastController } from '@ionic/angular';
import { IonContentCustomEvent, ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private toastController: ToastController) {}

  @ViewChild(IonContent)
  content: IonContent = null as any;

  scrollDirection: 'Bottom' | 'Top' | null = 'Top';

  async createToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      positionAnchor: 'header',
      cssClass: 'toast-document',
    });
    await toast.present();
  }

  navigateBottomUp() {
    const element = document.getElementById('icon-up-down');

    if (this.scrollDirection === 'Top') {
      element?.classList.remove('inactive');
      element?.classList.add('active');

      this.content.scrollToBottom(1000).then((value) => {
        this.scrollDirection = 'Bottom';
      });
    } else {
      element?.classList.remove('active');
      element?.classList.add('inactive');

      this.content.scrollToTop(1000).then((value) => {
        this.scrollDirection = 'Top';
      });
    }
  }

  /* scrollContent(event: IonContentCustomEvent<ScrollDetail>) {
    const element = document.getElementById('icon-up-down');
    if (event.detail.currentY > 0) {
      this.scrollDirection = 'Top';
      element?.classList.remove('active');
      element?.classList.add('inactive');
    } else {

    }
  } */

  exitApp() {
    App.exitApp();
  }
}
