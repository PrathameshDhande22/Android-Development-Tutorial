import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsnavComponent } from './components/tabsnav/tabsnav.component';

@NgModule({
  declarations: [AppComponent, TabsnavComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      // mode: 'md', // you can change the mode either to IOS or MD
    }),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
