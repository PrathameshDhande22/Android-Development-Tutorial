import { Component, OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import {
  AccordionGroupChangeEventDetail,
  IonAccordionGroupCustomEvent,
} from '@ionic/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: false,
})
export class AccordionComponent implements OnInit {
  activeAccordion: string = '';
  constructor() {}

  ngOnInit() {}

  // accordion change event
  onAccordionChange(
    event: IonAccordionGroupCustomEvent<AccordionGroupChangeEventDetail<any>>
  ) {
    console.log(event.detail.value);
    this.activeAccordion = event.detail.value;
  }
}
