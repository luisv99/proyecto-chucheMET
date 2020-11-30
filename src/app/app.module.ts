import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 


//Modulos de Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import{ AngularFireAuthModule} from '@angular/fire/auth';
import {DataDbService} from './service/data-db.service';
import { AuthService } from 'src/app/auth/services/auth.service';

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
import { FilterPipe } from './pipes/filter.pipe';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';





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
    LoginComponent,
    FilterPipe,
    CategoriasComponent, 
    LoginComponent
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
    AngularFireAuthModule, 
  ],
  providers: [ConexionService, DataDbService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
