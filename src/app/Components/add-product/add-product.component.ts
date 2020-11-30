import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ConexionService } from 'src/app/Servicios/conexion.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  //downloadURL: Observable<string>;

  filterPost = '' ;

  item: any = {
    name:'',
    precio: '',
    peso: '',
    descripcion:'',
    imagen: ''
  }

  editarItem: any = {
    name:'',
    precio: '',
    peso: '',
    descripcion:'',
    imagen: ''
  }

  items: any;
 
  filePath:String

  constructor(private conexion: ConexionService, private afStorage: AngularFireStorage) { 
    this.conexion.listaItem().subscribe(item=>{
    this.items = item;
  })
}

  ngOnInit(): void {
  }

  upload(event) {    
    this.filePath = event.target.files[0]
  }

  uploadImage(){
    console.log('path:',this.filePath)
    this.afStorage.upload('/images'+Math.random()+this.filePath, this.filePath).then((res)=>{
      res.ref.getDownloadURL().then((url)=>{
        console.log('imgURL:',url)
        this.item.imagen = url;
        this.agregar();
      });
    });
    
      
  }
  

  agregar(){
    this.conexion.agregarItem(this.item);
    this.item.name='';
    this.item.precio='';
    this.item.peso='';
    this.item.descripcion='';
    this.item.imagen='';
    console.log('this.item 1:' , this.item)
  } 

  eliminar(item){
    this.conexion.eliminaritem(item);
    }

  editar(item){
    this.editarItem = item;
    }
    
  agregarItemEditado(){
    this.conexion.editarItem(this.editarItem)
    }

    alerta(){
      alert("Producto editado correctamente")
    }


  }



