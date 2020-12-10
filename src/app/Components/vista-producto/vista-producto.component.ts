import { Component, OnInit } from '@angular/core';
import { Bolsa } from 'src/app/models/bolsa';
import { BolsasService } from 'src/app/Servicios/bolsas.service';
import { ConexionService } from 'src/app/Servicios/conexion.service';


@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})


export class VistaProductoComponent implements OnInit {
  filterPost = '' ;
  filterC = '';
  items: any;

  bolsa: Bolsa = {
    isOpen: null,
    pesoMax: null,
    items: []

  }



  constructor(private conexion: ConexionService, private b: BolsasService) { 
    this.conexion.listaItem().subscribe(item=>{
    this.items = item;
  })
}

  ngOnInit(): void {
  }

agregarABolsa(item){
  const bolsaId = localStorage.getItem('bolsaId')
  if (!bolsaId){
    this.bolsa.items.push(item.id)
    this.b.agregarBolsa(this.bolsa).then((res)=>{
      localStorage.setItem('bolsaId', res.id)
    })
    console.log('item:',item)
    console.log('bolsa:',this.bolsa)
  }else{

  }
}
  

}
