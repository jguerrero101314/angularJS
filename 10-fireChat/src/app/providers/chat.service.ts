import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Mensaje } from "../interface/mensaje.interface";
import { map } from "rxjs/operators";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  // items: Observable<Mensaje[]>;

  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore,public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      console.log('estado del usuario: ', user);
      if(!user){
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    })
   }
  login(proveedor: string) {

    if(proveedor === 'google'){
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else{
      firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }


  }
  logout() {
    this.usuario = {};
    firebase.auth().signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>("chats", (ref) =>
      ref.orderBy("fecha", "desc").limit(5)
    );
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        console.log(mensajes);
        this.chats = [];
        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }
        return this.chats;
        //this.chats = mensajes;
      })
    );
  }
  agregarmensaje(texto: string) {
    // TODO fal el uid del usuario
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };
    return this.itemsCollection.add(mensaje);
  }
}