import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioMdoel } from "../models/usuario.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // Esta es el atributo del servicio
  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";

  private apiKey = "AIzaSyDjjuEHf3luIvyG49dxy4OpgBgp0Q6Ekhs";

  //crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {}

  logout() {}
  login(usuario: UsuarioMdoel) {}
  NuevoUsuario(usuario: UsuarioMdoel) {
    const authData = {
      // email: usuario.email,
      // password: usuario.password,
      ...usuario, // es lo mismo que mandar solo email y password
      returnSecureToken: true,
    };

    return this.http.post(`${this.url}signUp?key=${this.apiKey}`, authData);
  }
}
