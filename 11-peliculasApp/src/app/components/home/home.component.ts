import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  peliculasPopulares: any[] = [];
  cartelera: any[] = [];

  constructor(public _ps:PeliculasService) {
      // this._ps.getPopulares().subscribe(
      //   (data) =>
      //    data.push(this.peliculas)
      // );
    //  this._ps.buscarPelicula("batman").subscribe(data => console.log(data));
    // this._ps.getPopulares()
    // .subscribe( ( items: any ) => {
    //   this.peliculasPopulares = items.slice(0, 8);
    //   console.log(this.peliculasPopulares);
    // });
     this._ps.getCartelera()
    .subscribe( ( items: any ) => {
      this.cartelera = items.slice(0, 8);
      console.log(this.cartelera);
    });
  }
  ngOnInit(): void {
  }
  verPeliculas(){

  }

}
