import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // paises:any[] = []; ejercicio
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;

    this.spotify.getNewReleases()
        .subscribe( (data:any) => {
           this.nuevasCanciones = data;
           this.loading = false;
           this.error =false


        },( errorServicio ) => {
          this.error = true;
          this.loading = false;
          console.log(errorServicio);
         this.mensajeError = errorServicio.error.error.message;
        });
  }

  ngOnInit() {
  }

}
