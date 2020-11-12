import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { HomeComponent } from './Components/home/home.component';
<<<<<<< HEAD
import { ProductosComponent } from './Components/productos/productos.component';

=======
import { AboutComponent } from './Components/about/about.component';
import { AdminComponent } from './Components/admin/admin.component';
>>>>>>> 3e8db180beccf69d25d22fe6b7807571924bbe97

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'contacto' , component: ContactoComponent},
<<<<<<< HEAD
{path: 'productos' , component: ProductosComponent}
=======
{path: 'about' , component: AboutComponent},
{path: 'admin' , component: AdminComponent}
>>>>>>> 3e8db180beccf69d25d22fe6b7807571924bbe97
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
