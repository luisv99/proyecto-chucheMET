import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserPService } from 'src/app/Servicios/user-p.service';
import { UserP } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  userId = '';
  user: UserP = null;

  constructor(private uPs: UserPService, private authService: AuthService, private route: ActivatedRoute, private uS: UserPService) { }

  ngOnInit(): void {
  }
  
  
  getURL(): void{
    this.route.paramMap.subscribe((params)=>{
      this.userId = params.get('userId');
      this.getUserById();
    })
  }

  getUserById():void{
    this.uS.getUser(this.userId).subscribe((user)=>{
      this.user = {
        ...user.payload.data(),
      };
    })
  }
 

}
