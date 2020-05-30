import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( resp => this.heroes = resp)
  }

  borrarHeroe(heroe: HeroeModel, i: number){
    swal.fire({
      title: 'Está seguro?',
      text: `Está seguro que desea borrar a ${heroe.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        this.heroes.splice(i, 1);
        this.heroesService.borrarHeroe(heroe.id).subscribe();
        swal.fire(
          'Eliminado!',
          'Eliminado correctamente',
          'success'
        )
      }
    })
  }
}
