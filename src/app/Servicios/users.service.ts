import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User { 
  name: string; 
  apellido: string;
  cedula: number;
  telefono: number;
  correo: string;
  password: any;
  direccion: string;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  
  private userDoc: AngularFirestoreDocument<User>;
  
  constructor(private db: AngularFirestore) {
    this.usersCollection = this.db.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   listaUsers(){
    return this.users;
  }

  agregarUser(user: User) {
    this.usersCollection.add(user);
  }

  eliminaruser(user){
    this.userDoc= this.db.doc<User>(`users/${user.id}`);
    this.userDoc.delete();
  }

  editarUser(user){
    this.userDoc= this.db.doc<User>(`users/${user.id}`);
    this.userDoc.update(user);
  }
}
