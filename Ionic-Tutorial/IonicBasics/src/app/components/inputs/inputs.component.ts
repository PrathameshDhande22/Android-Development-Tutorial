import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  standalone: false,
})
export class InputsComponent implements OnInit {
  constructor() {}

  selectedPython: string = '';
  selectedjavascript: string = '';

  ngOnInit() {}

  // column change value
  whenColumnChange(event: any) {
    if (event.target.classList.contains('javascriptbox')) {
      this.selectedjavascript = event.target.value;
    } else {
      this.selectedPython = event.target.value;
    }
  }
}
