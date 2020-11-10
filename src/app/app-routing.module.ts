import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { HomeComponent } from './Components/home/home.component';
import { VistaProductoComponent } from './Components/vista-producto/vista-producto.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'contacto' , component: ContactoComponent},
{path: 'vista' , component: VistaProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
