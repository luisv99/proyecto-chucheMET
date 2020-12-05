import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Servicios/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserP } from 'src/app/models/user';
import { UserPService } from 'src/app/Servicios/user-p.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService],
})



export class RegistroComponent implements OnInit {



  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  registroForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nombre: new FormControl('',[Validators.required, Validators.minLength(6)]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('',[Validators.required, Validators.minLength(11), Validators.pattern(this.emailPattern)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cedula: new FormControl('', [Validators.required, Validators.minLength(5)]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

 

  constructor(private authSvc:AuthService, private router: Router, private us: UserPService) {
   
   }

  ngOnInit(): void {
  }

  async onRegistro(){

    if(this.registroForm.valid){

      const {email, contrasena}=this.registroForm.value;
  
    try{
      const user= await this.authSvc.registro(email,contrasena);
      if(user){
        const profile: UserP = {
          userId: user.user.uid,
          rol:'',
          usuario:this.registroForm.get('usuario').value,
          nombre: this.registroForm.get('nombre').value,
          telefono:this.registroForm.get('telefono').value,
          cedula:this.registroForm.get('cedula').value,
          direccion:this.registroForm.get('direccion').value
        }
        console.log('usuario-->',user)
        console.log('profile-->', profile)
        this.us.createUserProfile(profile).then(()=>{
        this.router.navigate(['/sendEmail'])

        });
      }
    }
    catch(error){console.log(error);}

    }
  }
  


  


  
   


  alertaU(){
    alert("Algun campo no es correcto, por favor vuelva a intentarlo")
  }

get usuario() {
  return this.registroForm.get('usuario')
}
get nombre() {
  return this.registroForm.get('nombre')
}
get contrasena() {
  return this.registroForm.get('contrasena')
}
get email() {
  return this.registroForm.get('email')
}
get telefono() {
  return this.registroForm.get('telefono')
}
get cedula() {
  return this.registroForm.get('cedula')
}
get direccion() {
  return this.registroForm.get('direccion')
}

//password(){
// const p = document.getElementById('password')
// if (p.type === "password") {
//    p.type = "text";
//  } else {
//  p.type = "password";
// }
//}

 }

