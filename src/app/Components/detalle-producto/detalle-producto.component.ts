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
      this.itemId = params.get('itemId');
      this.getItemById();
})
  }



  getURL(): void{
    this.route.paramMap.subscribe((params)=>{
      this.itemId = params.get('itemId');
      this.getItemById();
    })
  }

  getItemById():void{
    this.c.getItem(this.itemId).subscribe((item)=>{
      this.item = {
        ...item.payload.data(),
      };
    })
  }

  

}
