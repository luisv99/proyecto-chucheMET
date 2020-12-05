import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {auth} from 'firebase/app';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:User;

  constructor(public afAuth: AngularFireAuth) { }

  async resetPassword(email:string): Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch(error){console.log(error)}
  }

  async sendVerificarEmail(): Promise<void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  


  async loginGoogle(){
    try{
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    catch(error){console.log(error)}
  }

  async login(email:string, password:string){

    try{
      const result= await this.afAuth.signInWithEmailAndPassword(
      email, 
      password,
      );
      return result;
    }
    catch(error){
      console.log(error)
    }
    
  }

  async registro( email:string, contrasena:string){
    try{

      const result= await this.afAuth.createUserWithEmailAndPassword(
        email,
        contrasena
         );
         this.sendVerificarEmail();
         return result;
    }
    catch(error){console.log(error)}
    
  }
  
  async logout(){

    try{
      await this.afAuth.signOut();
    }
    catch(error){console.log(error)}
    
  }
  getCurrentUser(){
      return this.afAuth.authState.pipe(first()).toPromise();
  }
}
