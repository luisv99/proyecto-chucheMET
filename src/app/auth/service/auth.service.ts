import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
//import {User} from 'firebase';
//import { User } from 'src/app/Servicios/users.service';
import {auth} from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //public user:User;

  constructor(public afAuth: AngularFireAuth) { }

  async loginGoogle(){
    try{
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    catch(error){console.log(error)}
  }
}
