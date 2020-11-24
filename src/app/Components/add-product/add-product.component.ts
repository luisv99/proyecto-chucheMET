import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/Servicios/conexion.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
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

  constructor(private conexion: ConexionService) { 
    this.conexion.listaItem().subscribe(item=>{
    this.items = item;
  })
}

  ngOnInit(): void {
  }

  agregar(){
    this.conexion.agregarItem(this.item);
    this.item.name='';
    this.item.precio='';
    this.item.peso='';
    this.item.descripcion='';
    this.item.imagen='';
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



