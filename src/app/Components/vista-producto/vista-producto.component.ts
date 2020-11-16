import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/Servicios/conexion.service';


@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})


export class VistaProductoComponent implements OnInit {

  items: any;

  constructor(private conexion: ConexionService) { 
    this.conexion.listaItem().subscribe(item=>{
    this.items = item;
  })
}

  ngOnInit(): void {
  }

}
