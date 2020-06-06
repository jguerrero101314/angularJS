import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class Domseguro implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){

  }
  transform(value: string, url: string): any {

    if(!value){
      return "assets/img/noimage.png";
    }
    if(value.length > 0){
      return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
    }else{
      return "assets/img/noimage.png";
    }
    
  }

   
  }


