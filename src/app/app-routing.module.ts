import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { HomeComponent } from './Components/home/home.component';
<<<<<<< HEAD
import { VistaProductoComponent } from './Components/vista-producto/vista-producto.component';

=======
import { AboutComponent } from './Components/about/about.component';
import { AdminComponent } from './Components/admin/admin.component';
>>>>>>> brian

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'contacto' , component: ContactoComponent},
<<<<<<< HEAD
{path: 'vista' , component: VistaProductoComponent}
=======
{path: 'about' , component: AboutComponent},
{path: 'admin' , component: AdminComponent}
>>>>>>> brian
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
