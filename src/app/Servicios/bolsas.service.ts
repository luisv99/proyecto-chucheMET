import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bolsa } from '../models/bolsa';

@Injectable({
  providedIn: 'root'
})
export class BolsasService {

  private bolsasCollection: AngularFirestoreCollection<Bolsa>;
  bolsas: Observable<Bolsa[]>;

  private bolsaDoc: AngularFirestoreDocument<Bolsa>;


  constructor(private afs: AngularFirestore) { 
    this.bolsasCollection = this.afs.collection<Bolsa>('bolsas');
    this.bolsas = this.bolsasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Bolsa;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaBolsa(){
    return this.bolsas;
  }

  agregarBolsa(bolsa: Bolsa) {
    return this.bolsasCollection.add(bolsa);
  }

  eliminarbolsa(bolsa){
    this.bolsaDoc= this.afs.doc<Bolsa>(`bolsas/${bolsa.id}`);
    this.bolsaDoc.delete();
  }

  editarBolsa(bolsa){
    this.bolsaDoc= this.afs.doc<Bolsa>(`bolsas/${bolsa.id}`);
    return this.bolsaDoc.update(bolsa);
  }



}
