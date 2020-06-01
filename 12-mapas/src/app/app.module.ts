import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MapaComponent } from './components/mapa/mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBG9HMhkqAHBIYFQrIGB1blKXSyzgPmz5Q'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
