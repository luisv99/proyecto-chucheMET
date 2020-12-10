import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritosCollection: AngularFirestoreCollection<Carrito>;
  carritos: Observable<Carrito[]>;

  private carritoDoc: AngularFirestoreDocument<Carrito>;

  constructor(private afs: AngularFirestore) { 
    this.carritosCollection = this.afs.collection<Carrito>('carritos');
    this.carritos = this.carritosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Carrito;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaCarrito(){
    return this.carritos;
  }

  agregarCarrito(carrito: Carrito) {
    this.carritosCollection.add(carrito);
  }

  eliminarcarrito(carrito){
    this.carritoDoc= this.afs.doc<Carrito>(`carritos/${carrito.id}`);
    this.carritoDoc.delete();
  }

  editarCarrito(carrito){
    this.carritoDoc= this.afs.doc<Carrito>(`carritos/${carrito.id}`);
    return this.carritoDoc.update(carrito);
  }

}
