import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router:Router) { }

  async onLogin(){
    const {email,contrasena}=this.loginForm.value;
    try{
      const user= await this.authSvc.login(email,contrasena);
      if (user){
        this.router.navigate(['/vista']);
      }
    }
    catch(error){console.log(error)};
    
  }

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
