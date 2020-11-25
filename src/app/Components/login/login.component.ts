import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private router:Router) { }

  onGoogleLogin(){
    try{
      this.authSvc.loginGoogle();
    }
    catch(error){
      
      console.log(error);
    }
   
  }

  ngOnInit(): void {
  }

}
