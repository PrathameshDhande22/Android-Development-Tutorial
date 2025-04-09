import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';
import {
  IonInput,
  IonText,
  ToastController,
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
  standalone: false,
})
export class MorePage
  implements
    OnInit,
    ViewWillEnter,
    ViewWillLeave,
    OnDestroy,
    ViewDidEnter,
    ViewDidLeave
{
  constructor() {}

  toastcontroller: ToastController = inject(ToastController);


  ngOnInit() {
    console.log('Page on Init');
  }

  ionViewWillEnter() {
    console.log('Ion View Will Enter');
  }

  ionViewWillLeave(): void {
    console.log('Ion View will Leave');
  }

  ngOnDestroy(): void {
    console.log('Destroyed the page');
  }

  ionViewDidEnter(): void {
    console.log('View Did Enter');
  }

  ionViewDidLeave(): void {
    console.log('View Did leave');
  }

  async copyToClipBoard(input: IonInput) {
    await Clipboard.write({
      string: input.value?.toString(),
    });

    const toast = await this.toastcontroller.create({
      message: 'Copied the Message',
      icon: 'clipboard',
      color: 'primary',
      duration: 2000,
    });
    input.value = '';
    await toast.present();
  }

  async getFromClipBoard() {
    const datagotfromclipboard = await Clipboard.read();
    const divele = document.getElementById('text-box') as HTMLDivElement;
    divele.innerHTML = datagotfromclipboard.value;
  }
}
