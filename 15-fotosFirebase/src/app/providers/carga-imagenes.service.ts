import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { FileItem } from "../models/file-item";
import "firebase/storage";

@Injectable({
  providedIn: "root",
})
export class CargaImagenesService {
  private CARPETA_IMAGENES = "img";
  constructor(private db: AngularFirestore) {}

  cargarImagenesFirebase(imagenes: FileItem[]) {
    const storageRef = firebase.storage().ref();

    for (const item of imagenes) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
        .put(item.archivo);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>
          (item.progreso =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        (error) => console.log("Error al subir" + error),
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((value) => {
            item.url = value;
            item.estaSubiendo = false;
            this.guardarImagen({ nombre: item.nombreArchivo, url: item.url });
            console.log("Imagen almacenada correctamente");
            console.log(item);
          });
        }
      );
    }
  }

  private guardarImagen(imagen: { nombre: string; url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}
