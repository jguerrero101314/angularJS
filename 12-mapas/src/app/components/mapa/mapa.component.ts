import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;
  constructor() {
    const marcadorNuevo = new Marcador(51.678418,7.809007);
    this.marcadores.push(marcadorNuevo);
  }

  ngOnInit(): void {
  }
  agregarMarcador(evento){
    const coords: { lat: number, lng: number} = evento.coords;
    console.log(evento.coords.lat);
    const marcadorNuevo = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(marcadorNuevo);
  }

}
