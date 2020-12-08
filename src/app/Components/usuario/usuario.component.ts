import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserPService } from 'src/app/Servicios/user-p.service';
import { UserP } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {



  constructor(private uPs: UserPService, private auth: AuthService, form: FormBuilder ) { }

  formG = new FormGroup({
    usuario: new FormControl('',),
    nombre: new FormControl('',),
    email: new FormControl('',),
    telefono: new FormControl('',),
    cedula: new FormControl('',),
    direccion: new FormControl('',),
  });

  userProfleId : string;


  ngOnInit(): void {
    this.auth.getCurrentUser().then((user)=>{
      console.log('usuario:',user)
      this.uPs.getListOfId(user.uid).then((res)=>{
        this.userProfleId = res.docs[0].id;
        const userP = {
            usuario: res.docs[0].get('usuario') as string,
            nombre: res.docs[0].get('nombre') as string,
            email: user.email,
            telefono: res.docs[0].get('telefono') as number,
            cedula: res.docs[0].get('cedula') as number,
            direccion: res.docs[0].get('direccion') as string,
        }
        this.formG.patchValue(userP);
      });
    });
  }

 
 
  editarUser(){
    const userP: UserP = {
      usuario: this.formG.get('usuario').value,
      nombre: this.formG.get('nombre').value,
      cedula: this.formG.get('cedula').value,
      telefono: this.formG.get('telefono').value,
      direccion: this.formG.get('direccion').value,
    }
    this.uPs.editarUser(userP, this.userProfleId).then(()=>{
      console.log('updated profile')
    })
    }
  

}
