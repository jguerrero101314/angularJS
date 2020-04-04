import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- <p [ngStyle]="{'font-size': tamano + 'px'}">
      Hola mundo.... esta es una etiqueta
    </p> -->
    <p [style.fontSize.px]="tamano">
      Hola mundo.... esta es una etiqueta
    </p>
    <button class="btn btn-primary mr-2" (click)="tamano = tamano + 5">
    <i class="fas fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
    <i class="far fa-minus-square"></i>    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano:number = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
