import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PeliculasService {
  private apiKey: string = "23f155a1ddbc67d4f30e2fcae465fd3d";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) {}

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=10`;
    return this.http.get(url).pipe(map((res: any) => res.results));
  }
  buscarPelicula( texto:string ){

    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apiKey}&language=es&query=${texto}&page=1&include_adult=false`;
    return this.http.get( url )
                .pipe(map( (res:any) => res.results));
  }
}

