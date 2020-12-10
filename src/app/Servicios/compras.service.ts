import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Compra  {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private comprasCollection: AngularFirestoreCollection<Compra>;
  compras: Observable<Compra[]>;

  private compraDoc: AngularFirestoreDocument<Compra>;


  constructor(private compra: AngularFirestore) {
    this.comprasCollection = this.compra.collection<Compra>('compras');
    this.compras = this.comprasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Compra;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getCompras(){
    return this.compras;
   }

   agregarCompra(compra: Compra) {
    this.comprasCollection.add(compra);
  }

  eliminarCompra(compra){
    this.compraDoc= this.compra.doc<Compra>(`compras/${compra.id}`);
    this.compraDoc.delete();
  }

  editarCompra(compra){
    this.compraDoc= this.compra.doc<Compra>(`compras/${compra.id}`);
    this.compraDoc.update(compra);
  }
  
}
