import { Component, OnInit } from '@angular/core';
import { Pago, PagosService } from 'src/app/Servicios/pagos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  
  pago: any = {
    name:'',
  }

  editarPago: any = {
    name:'',
  }

  pagos: any;

  constructor(private pagoS: PagosService) { 
    this.pagoS.getPagos().subscribe(pagos=>{
      this.pagos = pagos;
    })
  }

  ngOnInit(): void {
  }

  agregarPago(){
    this.pagoS.agregarPago(this.pago);
    this.pago.name='';
  } 

  eliminar(pago){
    this.pagoS.eliminarPago(pago);
    }

  editar(pago){
    this.editarPago = pago;
    }
    
  agregarPagoEditado(){
    this.pagoS.editarPago(this.editarPago)
    }

    alerta1(){
      alert("Metodo de pago agregada satisfactoriamente")
    }

    alerta2(){
      alert("Metodo de pago editado satisfactoriamente")
    }



}
