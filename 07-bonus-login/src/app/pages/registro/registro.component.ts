import { Component, OnInit } from "@angular/core";
import { UsuarioMdoel } from "../../models/usuario.model";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioMdoel;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.usuario = new UsuarioMdoel();
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(this.usuario.password);
    this.auth.NuevoUsuario(this.usuario)
        .subscribe(resp => {
          console.log(resp);
        },(error)=>{
          console.log(error.error.error.message);
        });
  }
}
