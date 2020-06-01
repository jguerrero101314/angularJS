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
    let url = `${this.urlMoviedb}/movie/popular?api_key=${this.apiKey}&language=es&page=1`;
    return this.http.get(url).pipe(map((res: any) => res.results));
  }
}
