import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConexionService, Item } from '../../Servicios/conexion.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  itemId = '';
  item: Item = null;

  constructor(
    private route: ActivatedRoute,
    private c : ConexionService
  ) { }

  ngOnInit(): void {
    this.getURL();
    this.route.paramMap.subscribe((params)=>{
      this.itemId = params.get('todoId');
      this.getItemById();
      console.log('prueba1',params)
    })
  }



  getURL(): void{
    this.route.paramMap.subscribe((params)=>{
      this.itemId = params.get('todoId');
      this.getItemById();
      console.log('prueba2',params)
    })
  }

  getItemById():void{
    this.c.getItem(this.itemId)
    console.log('prueba3', this.item)
  }

  

}
