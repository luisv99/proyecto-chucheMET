import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserP } from '../models/user';



@Injectable({
  providedIn: 'root'
})


export class UserPService {
  
private userPCollection : AngularFirestoreCollection<UserP>;
private userDoc: AngularFirestoreDocument<UserP>;
userP: Observable<UserP[]>;

  constructor(private af: AngularFirestore) {
    this.userPCollection = this.af.collection<UserP>('usersP');
    this.userP = this.userPCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as UserP;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

   }

listaUsersP(){
  return this.userP;
}

createUserProfile(userP:UserP){
  return this.userPCollection.add(userP);
}

editarUser(user,userId){
  this.userDoc= this.af.doc<UserP>(`usersP/${userId}`);
  return this.userDoc.update(user);
}

getListOfId(userId: string): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>> {
  return this.userPCollection.ref.where('userId', '==', userId).get();
}

}
