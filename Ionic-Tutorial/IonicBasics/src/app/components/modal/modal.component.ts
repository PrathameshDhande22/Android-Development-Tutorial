import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: false,
})
export class ModalComponent implements OnInit {
  isModalOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  openModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
