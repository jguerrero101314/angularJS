import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import Swal from 'sweetalert2'
import {Location} from '@angular/common';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula: any[];
  trailer:any[];
  url_parent:string;
  constructor(public ngProgress: NgProgress,private router:Router, private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService, private _location: Location) {




  /*   console.log(activatedRoute.snapshot.url); // array of states
    console.log(activatedRoute.snapshot.url[0].path);
    this.activatedRoute.parent.url.subscribe(url =>{
      console.log(url);
    }) */
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null) {
        this.ngProgress.start();
        this.peliculasService.getPelicula(params['id']).subscribe((pelicula: any) => {
          this.pelicula = pelicula;
          this.peliculasService.getPeliculaTrailer(this.pelicula['id']).subscribe((trailer:any) =>{
            this.trailer = trailer;
            console.log(trailer);
          })
          this.ngProgress.done();
        }, e => {
          console.log(e);
          Swal('Error','Por favor no intente hackiar mi app: '+ e.statusText,'error');
            this.router.navigate(['']);
        })
      }
    })


}

backClicked() {
  this._location.back();
}


  onNavigate(url: string) {
    window.open(url, "_blank");
  }



}
