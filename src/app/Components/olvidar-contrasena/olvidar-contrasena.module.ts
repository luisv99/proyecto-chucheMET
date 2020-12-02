import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { OlvidarContrasenaRoutingModule } from './olvidar-contrasena-routing.module';
import { OlvidarContrasenaComponent } from './olvidar-contrasena.component';


@NgModule({
  declarations: [OlvidarContrasenaComponent],
  imports: [
    CommonModule,
    OlvidarContrasenaRoutingModule,
    ReactiveFormsModule
  ],
})
export class OlvidarContrasenaModule { }
