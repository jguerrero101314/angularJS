import { Component, OnInit } from "@angular/core";
import { UsuarioMdoel } from "../../models/usuario.model";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioMdoel;

  constructor() {}

  ngOnInit() {
    this.usuario = new UsuarioMdoel();
    this.usuario.email = 'joelg1014@hotmail.com';
  }
  onSubmit(){
    console.log("Formulario enviado");
    console.log(this.usuario);

  }
}
