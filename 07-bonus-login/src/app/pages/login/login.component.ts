import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioMdoel } from "../../models/usuario.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioMdoel;

  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioMdoel();

  }

  login(form: NgForm){
    if(form.invalid){return;}
    console.log(this.usuario);
    console.log("Imprimir si el formulario es valido");
    console.log(form);

  }

}
