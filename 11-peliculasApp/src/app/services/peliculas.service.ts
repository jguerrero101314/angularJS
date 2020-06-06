import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey: string = "9793ab5202d51818cf3f3e5e36560fc9";
  private urlMovieDB: string = "https://api.themoviedb.org/3"
  constructor(private http: HttpClient, private datePipe: DatePipe, private router: Router) { }

  getPeliculaTrailer(video:string){
    let url = `${this.urlMovieDB}/movie/${video}/videos?api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
  }

  getPeliculas(urlEspecific: string) {
    let url = `${this.urlMovieDB}${urlEspecific}&api_key=${this.apiKey}&language=es`; //&page=2
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map((data: any) => {
      data.results = data.results.slice(0, 9);
      return data;
    }));
  }
  getPelicula(id:string){
    let url = `${this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
  }

  getPeliculaYear(year:string){
    let url = `${this.urlMovieDB}/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map((data:any) => {
      data.results = data.results.slice(0, 9);
      return data;  
    }));
  }

  buscar(termino:string){
    let url = `${this.urlMovieDB}/search/movie?query=${termino}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url,'callback=JSONP_CALLBACK').pipe(map((data:any) =>{
      data.results = data.results.slice(0, 9);
      return data;
    }))
  }

  methodConstruct(termino: string) {
    switch (termino) {
      case 'populares':
        return this.getPeliculas("/discover/movie?sort_by=popularity.desc");
        break;
      case 'niños':
        return this.getPeliculas("/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc");
        break;
      case 'teatros':
        let date: Date;
        date = new Date();
        date.setDate(date.getDate() - 30);
        return this.getPeliculas(`/discover/movie?primary_release_date.gte=${this.datePipe.transform(date, 'yyyy-MM-dd')}&primary_release_date.lte=${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`);
        break;
      default:
        Swal('Oops...', 'No existe esta categoria', 'error')
        this.router.navigate([''])
        return this.getPeliculas("/discover/movie?sort_by=popularity.desc");
        break;
    }
  }
}
