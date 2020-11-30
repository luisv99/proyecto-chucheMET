import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/Servicios/compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  compra: any = {
    name:'',
  }

  editarCompra: any = {
    name:'',
  }

  compras: any;

  constructor(private compraS: ComprasService) { 
    this.compraS.getCompras().subscribe(compras=>{
      this.compras = compras;
    })
  }

  ngOnInit(): void {
  }

  agregarCompra(){
    this.compraS.agregarCompra(this.compra);
    this.compra.name='';
  } 

  eliminar(compra){
    this.compraS.eliminarCompra(compra);
    }

  editar(compra){
    this.editarCompra = compra;
    }
    
  agregarCompraEditado(){
    this.compraS.editarCompra(this.editarCompra)
    }

    alerta1(){
      alert("Metodo de compra agregada satisfactoriamente")
    }

    alerta2(){
      alert("Metodo de compra editado satisfactoriamente")
    }

}
