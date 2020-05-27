import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioMdoel } from "../models/usuario.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey = "AIzaSyDjjuEHf3luIvyG49dxy4OpgBgp0Q6Ekhs";
  userToker: string;

  //crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {}
  login(usuario: UsuarioMdoel) {
    const authData = {
      // email: usuario.email,
      // password: usuario.password,
      ...usuario, // es lo mismo que mandar solo email y password
      returnSecureToken: true,
    };
    return this.http.post(`${this.url}signUp?key=${this.apiKey}`, authData)
    .pipe(map((resp) => {
      console.log('entro en el mapa del RXJS');
      this.guardarToken(resp['idToken']);
      return resp;
    })
  );
  }
  NuevoUsuario(usuario: UsuarioMdoel) {
    const authData = {
      // email: usuario.email,
      // password: usuario.password,
      ...usuario, // es lo mismo que mandar solo email y password
      returnSecureToken: true,
    };
    return this.http
      .post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData)
      .pipe(map((resp) => {
        console.log('entro en el mapa del RXJS');
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }
  private guardarToken(idToken: string) {
    this.userToker = idToken;
    localStorage.setItem("token", idToken);
  }
  leerToken() {
    if (localStorage.getItem("token")) {
      this.userToker = localStorage.getItem("token");
    } else {
      this.userToker = "";
    }
    return this.userToker;
  }
}
