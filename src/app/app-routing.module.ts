import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { HomeComponent } from './Components/home/home.component';
import { VistaProductoComponent } from './Components/vista-producto/vista-producto.component';
import { AboutComponent } from './Components/about/about.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { VistaUsersComponent } from './Components/vista-users/vista-users.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';







const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'contacto' , component: ContactoComponent},
{path: 'vista' , component: VistaProductoComponent},
{path: 'about' , component: AboutComponent},
{path: 'admin' , component: AdminComponent},
{path: 'add' , component: AddProductComponent},
{path: 'users' , component: VistaUsersComponent},
{path: 'categorias' , component: CategoriasComponent},
{path: 'login', component: LoginComponent},
{path: 'registro', component: RegistroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
