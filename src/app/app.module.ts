import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  MatButtonModule,
  MatCardModule,
  MatToolbarModule } from '@angular/material';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    environment.production ? ServiceWorkerModule.register('ngssw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
