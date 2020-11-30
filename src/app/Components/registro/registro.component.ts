import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService],
})
export class RegistroComponent implements OnInit {

  registroForm = new FormGroup({
    usuario: new FormControl(''),
    nombre: new FormControl(''),
    contrasena: new FormControl(''),
    contrasena2: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
  });

 

  constructor(private authSvc:AuthService, private router: Router) {
   
   }

  ngOnInit(): void {
  }

  async onRegistro(){
    const {email, contrasena}=this.registroForm.value;

    try{
      const user= await this.authSvc.registro(email,contrasena);
      if(user){
        this.router.navigate(['/vista'])
      }

    }
    catch(error){console.log(error);}
   
  }

 

  
}
