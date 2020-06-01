import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PeliculasService {
  private apiKey: string = "23f155a1ddbc67d4f30e2fcae465fd3d";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  private date1: any = '2019-10-08';
  private date2: any = '2020-11-06';

  constructor(private http: HttpClient) { }
  private getURL(request: string, language: string = 'es'): string {
    return `${this.urlMoviedb}${request}&api_key=${this.apiKey}&language=${language}`;
  }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&language=es&sort_by=popularity.asc&include_adult=false&include_video=false&page=10`;
    return this.http.get(url).pipe(map((res: any) => res.results));
  }

  getPopularesKids() {
    const request = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.asc';
    const url = this.getURL(request);

    return this.http.get(url)
      .pipe(map(res => res));
  }
  buscarPelicula(texto: string) {

    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apiKey}&language=es&query=${texto}&page=1&include_adult=false`;
    return this.http.get(url)
      .pipe(map((res: any) => res.results));
  }

  getCartelera() {
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${this.date1}&primary_release_date.lte=${this.date2}&api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(map((res: any) => res.results));
  }
}    //const request = `/discover/movie?primary_release_date.gte=${ txHasta }&primary_release_date.lte=${ txHoy }`;


