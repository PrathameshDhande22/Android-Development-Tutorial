import { Component, OnInit } from '@angular/core';
import { ActionSheetButton } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
  standalone: false,
})
export class ActionSheetComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public actionperformed: string = '';

  // defining the action sheet buttons
  public actionsheetButtons: ActionSheetButton[] = [
    {
      text: 'Delete',
      role: '',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      role: 'destructive',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Exit',
      role: 'cancel',
      data: {
        action: 'exit',
      },
      cssClass: 'danger',
    },
  ];

  onDismiss(event: any) {
    this.actionperformed = event?.detail?.data?.action;
  }
}
