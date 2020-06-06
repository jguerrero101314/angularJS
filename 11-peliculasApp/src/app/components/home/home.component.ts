import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { NgProgress } from 'ngx-progressbar';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculas = new Array();
  year:string;
  constructor(private peliculasService: PeliculasService, 
    public ngProgress: NgProgress, private activatedRoute: ActivatedRoute, private router:Router) {
    
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    if(params['categoria'] != null){
    this.buscarPorCategoria(params['categoria']);
    }
    else if(params['year'] != null){
      this.year = params['year'];
      this.buscarPorYear(params['year']);
      }
     else if(params['query'] != null){
            this.buscarPorTermino(params['query']);
        }
        else{
          this.buscarPorCategoria("populares");
        }
    })
  }

  buscarPorTermino(termino:string){
    this.ngProgress.start();
    this.peliculasService.buscar(termino).subscribe((peliculas:Array<any>) => {
      this.peliculas = peliculas;
      this.ngProgress.done();
    })
  }

  buscarPorCategoria(termino:string){
    this.ngProgress.start();
    this.peliculasService.methodConstruct(termino).subscribe((peliculas:Array<any>) => {
      this.peliculas = peliculas;
      this.ngProgress.done();
    }) 
  }

  buscarPorYear(termino:string){
    this.ngProgress.start();
    this.peliculasService.getPeliculaYear(termino).subscribe((peliculas:Array<any>) => {
      this.peliculas = peliculas;
      this.ngProgress.done();
    }) 
  }
  filterChanged(valor:string){
    if(valor == "Mejores en"){

    }else{
this.router.navigate(['/categorias/best/',valor]);
    }

  }
}
