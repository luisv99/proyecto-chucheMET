import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Servicios/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';



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
    direccion: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

 

  constructor(private authSvc:AuthService, private router: Router) {
   
   }

  ngOnInit(): void {
  }

  async onRegistro(){

    if(this.registroForm.valid){

      const {email, contrasena}=this.registroForm.value;
  
      try{
        const user= await this.authSvc.registro(email,contrasena);
        if(user){
          this.router.navigate(['/vista'])
        }
  
      }
      catch(error){console.log(error);}

}else{

  this.alertaU();
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
get direccion() {
  return this.registroForm.get('direccion')
}

password(){
 const p = document.getElementById('password')
 if (p.type === "password") {
    p.type = "text";
  } else {
  p.type = "password";
 }
}

 }
