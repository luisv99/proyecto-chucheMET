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
import { RegistroComponent } from './Components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DetalleProductoComponent } from './Components/detalle-producto/detalle-producto.component';
import { CartComponent } from './Components/cart/cart.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'contacto' , component: ContactoComponent},
{path: 'vista' , component: VistaProductoComponent},
{path: 'vista/:itemId' , component: DetalleProductoComponent},
{path: 'about' , component: AboutComponent}, 
{path: 'admin' , component: AdminComponent},
{path: 'add' , component: AddProductComponent},
{path: 'users' , component: VistaUsersComponent},
{path: 'categorias' , component: CategoriasComponent},
{path: 'login', component: LoginComponent},
{path: 'registro', component: RegistroComponent},
{path: 'usuario', component: UsuarioComponent},
{path: 'usuario', component: UsuarioComponent},
{path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
