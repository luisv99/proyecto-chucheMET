import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Servicios/users.service';

@Component({
  selector: 'app-vista-users',
  templateUrl: './vista-users.component.html',
  styleUrls: ['./vista-users.component.css']
})
export class VistaUsersComponent implements OnInit {

  user: any = {
    name: '',
    apellido: '',
    telefono: '',
    correo: '',
    password: '',
    direccion: '',
  }

  editarUser: any = {
    name: '',
    apellido: '',
    telefono: '',
    correo: '',
    password: '',
    direccion: '',
  }


  users: any;

  constructor(private userS: UsersService) { 
    this.userS.listaUsers().subscribe(user=>{
      this.users = user;
    })
  }

  ngOnInit(): void {
  }

  eliminar(user){
    this.userS.eliminaruser(user);
    }

  editar(user){
    this.editarUser = user;
  
    }
      
  agregarUserEditado(){
    this.userS.editarUser(this.editarUser);
    }

}
