import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-olvidar-contrasena',
  templateUrl: './olvidar-contrasena.component.html',
  styleUrls: ['./olvidar-contrasena.component.css'],
  providers: [AuthService],
})
export class OlvidarContrasenaComponent  {
  userEmail = new FormControl('');
  constructor(private authSvc: AuthService, private router: Router) { }

  async onReset() {
    try {
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Email sent, check your inbox!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
