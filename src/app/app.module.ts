import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 


//Modulos de Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { VistaProductoComponent } from './Components/vista-producto/vista-producto.component';
import { AboutComponent } from './Components/about/about.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ConexionService } from './Servicios/conexion.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleProductoComponent } from './Components/detalle-producto/detalle-producto.component';
import { VistaUsersComponent } from './Components/vista-users/vista-users.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';



//pipes//
import { FilterPipe } from './pipes/filter.pipe';
import { UsersPipe } from './pipes/users.pipe';
import { RegistroComponent } from './Components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './Components/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    VistaProductoComponent,
    AboutComponent,
    AdminComponent,
    AddProductComponent,
    DetalleProductoComponent,
    VistaUsersComponent,
    FilterPipe,
    CategoriasComponent,
    UsersPipe,
    RegistroComponent, 
    UsuarioComponent, 
    CartComponent
],
      
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule    
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
