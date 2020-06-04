import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';


@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any ) {
    this.mouseSobre.emit( true );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ) {
    this.mouseSobre.emit( false );
  }

  // validaciones
  private _archivoPuedeSerCargado(archivo:File): boolean{
    if(!this._archivosYaFueDroppeado(archivo.name) && this._esImagen(archivo.type)){
        return true;
    }
    else{
      return false;
    }
  }


  private _prevenirDetener( event){
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivosYaFueDroppeado( nombreArhivo: string): boolean{
    for(const archivo of this.archivos){
      if(archivo.nombreArchivo === nombreArhivo){
        console.log('el archivo', + nombreArhivo + ' ya esta agregado');
        return true;
      }
    }
    return false;
  }
  private _esImagen( tipoArchivo: string): boolean{
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }

}
