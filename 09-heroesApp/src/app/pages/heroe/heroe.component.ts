import { Component, OnInit } from "@angular/core";
import { HeroeModel } from "../../models/heroe.model";
import { NgForm } from "@angular/forms";
import { HeroesService } from "../../service/heroes.service";
import swal from "sweetalert2";
import { Observable } from "rxjs";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"],
})
export class HeroeComponent implements OnInit {
  heroe = new HeroeModel();
  titularAlerta: string;

  constructor(private heroeService: HeroesService) {}

  ngOnInit(): void {}
  guardar(form: NgForm) {
    if (form.invalid) {
      swal.fire("Formulario no valido", this.titularAlerta, "error");
      return;
    }
    swal.fire({
      title: "Espere",
      text: "Guardando informacion",
      icon: "info",
      allowOutsideClick: false,
    });
    swal.showLoading();
    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroeService.actualizarHeroe(this.heroe);
      // swal.fire('Actualizado Correctamente', this.titularAlerta, 'success');
    } else {
      peticion = this.heroeService.crearHeroe(this.heroe);
      //  swal.fire('Enviado Correctamente', this.titularAlerta, 'success');
    }
    peticion.subscribe(resp => {
          swal.fire({
            title: this.heroe.nombre,
            text: "Se actualizo correctamente",
            icon: "success"
          });
    });
  }
}
