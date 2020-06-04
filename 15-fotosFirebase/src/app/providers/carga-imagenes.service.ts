import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: "root",
})
export class CargaImagenesService {
  private CARPETA_IMAGENES = 'img';
  constructor(private db: AngularFirestore) { }

  private guardarImagen( imagen: { nombre:string, url:string } ){
    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
            .add(imagen);
  }
}
