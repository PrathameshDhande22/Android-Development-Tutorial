import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ActionSheetComponent } from '../components/action-sheet/action-sheet.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { AlertComponent } from '../components/alert/alert.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { InputsComponent } from '../components/inputs/inputs.component';
import { SimpleComponent } from '../components/simple/simple.component';
import { MenusComponent } from '../components/menus/menus.component';
import { ModalComponent } from '../components/modal/modal.component';
import { DetailComponent } from '../components/detail/detail.component';
import { TabsnavComponent } from '../components/tabsnav/tabsnav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    HomePage,
    ActionSheetComponent, // adding our custom component
    AccordionComponent,
    AlertComponent,
    BadgeComponent,
    InputsComponent,
    SimpleComponent,
    MenusComponent,
    ModalComponent,
    DetailComponent,
  ],
})
export class HomePageModule {}
