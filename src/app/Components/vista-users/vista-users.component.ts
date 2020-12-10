import { Component, OnInit } from '@angular/core';
import { UserPService } from 'src/app/Servicios/user-p.service';

@Component({
  selector: 'app-vista-users',
  templateUrl: './vista-users.component.html',
  styleUrls: ['./vista-users.component.css']
})
export class VistaUsersComponent implements OnInit {
  filterUser = '';
  users: any;

  constructor(private userPS: UserPService) { 
    this.userPS.listaUsersP().subscribe(user=>{
      this.users = user;
    })
  }

  ngOnInit(): void {
  }

 // eliminar(user){
   // this.userPS.eliminaruser(user);
    //}

  //editar(user){
   // this.editarUser = user;
  
 //   }
      
 // agregarUserEditado(){
  //  this.userS.editarUser(this.editarUser);
   // }

}
