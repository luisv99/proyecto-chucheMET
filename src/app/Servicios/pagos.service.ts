import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Pago  {
  name: string;
}

@Injectable({
  providedIn: 'root'
})



export class PagosService {

  private pagosCollection: AngularFirestoreCollection<Pago>;
  pagos: Observable<Pago[]>;

  private pagoDoc: AngularFirestoreDocument<Pago>;


  constructor(private pago: AngularFirestore) {
    this.pagosCollection = this.pago.collection<Pago>('pagos');
    this.pagos = this.pagosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Pago;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getPagos(){
    return this.pagos;
   }

   agregarPago(pago: Pago) {
    this.pagosCollection.add(pago);
  }

  eliminarPago(pago){
    this.pagoDoc= this.pago.doc<Pago>(`pagos/${pago.id}`);
    this.pagoDoc.delete();
  }

  editarPago(pago){
    this.pagoDoc= this.pago.doc<Pago>(`pagos/${pago.id}`);
    this.pagoDoc.update(pago);
  }
}
