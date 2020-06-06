import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  terminoBusqueda(termino:string){
    if (termino == ""){
      Swal('Ingresa un valor','Por favor ingresa un valor en el cuadro de busqueda','info')
    }else{
    this.router.navigate(['/query',termino]);
    }
  }

}
