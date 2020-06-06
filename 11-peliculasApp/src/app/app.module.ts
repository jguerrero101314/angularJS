import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CutResumePipe } from './pipes/cut-resume.pipe';
import { Domseguro } from './pipes/dom-seguro.pipe';
import { DatePipe } from '@angular/common';
import { NgProgressModule } from 'ngx-progressbar';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CutResumePipe,
    Domseguro,
    FooterComponent,
    PeliculaComponent,
    NoImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     HttpClientJsonpModule,
     NgProgressModule,
     SweetAlert2Module.forRoot()
  ],
  providers: [
    PeliculasService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
