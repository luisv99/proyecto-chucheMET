import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/Servicios/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  category: any = {
    name: '',
  }

  editarCategory: any = {
    name: '',
   }

  categories: any;

  constructor(private categoryS: CategoriasService) { 
    this.categoryS.listaCategory().subscribe(category=>{
    this.categories = category;
  })
}


  ngOnInit(): void {
  }

  alerta(){
    alert("Categoria agregada satisfactoriamente")
  }
 
  alerta2(){
    alert("Categoria editada satisfactoriamente")
  }


  agregar(){
    this.categoryS.agregarCategory(this.category);
    this.category.name='';
  } 

  eliminar(category){
    this.categoryS.eliminarCategory(category);
    }

  editar(category){
    this.editarCategory = category;
  
    }
      
  agregarCategoryEditado(){
    this.categoryS.editarCategory(this.editarCategory);
    }

}
