import { Component, OnInit } from "@angular/core";
import { UsuarioMdoel } from "../../models/usuario.model";
import { NgForm } from "@angular/forms";

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
  }
  onSubmit(form: NgForm) {
    if(form.invalid){return;}
    console.log("Formulario enviado");
    console.log(this.usuario);
    console.log(form);
  }
}
