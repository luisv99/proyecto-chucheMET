import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { HomeComponent } from './Components/home/home.component';
import { VistaProductoComponent } from './Components/vista-producto/vista-producto.component';
import { AboutComponent } from './Components/about/about.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddProductComponent } from './Components/add-product/add-product.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'contacto' , component: ContactoComponent},
{path: 'vista' , component: VistaProductoComponent},
{path: 'about' , component: AboutComponent},
{path: 'admin' , component: AdminComponent},
{path: 'add' , component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
