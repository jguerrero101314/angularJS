import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../service/heroes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe = new HeroeModel();
  titularAlerta:string;

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }
  guardar(form: NgForm){
    if(form.invalid){
      swal.fire('Formulario no valido', this.titularAlerta, 'error');
      return;
    }
    this.heroeService.crearHeroe(this.heroe).subscribe(resp => {
      swal.fire('Enviado Correctamente', this.titularAlerta, 'success');
    });
  }
}
