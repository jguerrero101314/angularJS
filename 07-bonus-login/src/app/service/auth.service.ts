import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { UsuarioMdoel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyDjjuEHf3luIvyG49dxy4OpgBgp0Q6Ekhs';

  //crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }

  logout(){}
  login(usuario:UsuarioMdoel){}
  registrarNuevoUsuario(usuario:UsuarioMdoel){}
}
