import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UsuarioMdoel } from "../../models/usuario.model";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioMdoel;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.usuario = new UsuarioMdoel();
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.login(this.usuario)
    .subscribe(resp => {
      console.log(resp);
    },(error)=>{
      console.log(error.error.error.message);
    });
  }
}
