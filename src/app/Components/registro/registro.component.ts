import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Servicios/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: any = {
    name:'',
    apellido: '',
    cedula: '',
    telefono:'',
    correo: '',
    direccion: '',
    usuario: '',
    password: '',
  }

  constructor(private userS: UsersService) { }

  ngOnInit(): void {
  }

  agregarU(){
    this.userS.agregarUser(this.user);
    this.user.name='';
    this.user.apellido='';
    this.user.cedula='';
    this.user.telefono='';
    this.user.correo='';
    this.user.direccion='';
    this.user.usuario='';
    this.user.password='';
  }

}
