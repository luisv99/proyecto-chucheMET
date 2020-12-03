import { Component, OnInit } from '@angular/core';
import {DataDbService} from '../../service/data-db.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

  contactForm: FormGroup;

  constructor(private dbData: DataDbService) {
    this.contactForm=this.createFormGroup();
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    this.dbData.saveMessage(this.contactForm.value);
  }

  msg(){
    alert('Tu mensaje se ha enviado con exito')
  }

}
