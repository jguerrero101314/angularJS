import { Component  } from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    mostrar = true;
    frase:any = {
        mensaje: 'Un Gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };

    personajes:string[] = ['Iron man', 'Capitan America', 'Super Man'];

}