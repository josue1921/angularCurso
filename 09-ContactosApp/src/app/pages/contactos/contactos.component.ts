import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { ContactoModel } from '../../models/contacto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styles: []
})
export class ContactosComponent implements OnInit {
  listContactos:ContactoModel[] = [];
  loading: boolean = false;

  constructor( private contactosService: ContactosService ) {}

  ngOnInit() {
    this.loading = true;
    this.contactosService.getContactos()
        .subscribe( data => {this.listContactos = data; this.loading = false});
  }

  borrarContacto( contacto: ContactoModel , i: number ) {
    Swal.fire({
      title: '¿Esta seguro?',
      text: `Esta seguro que desea borrar a ${ contacto.nombre }`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then ( resp => {
      if ( resp.value ){
        this.listContactos.splice(i, 1);
        this.contactosService.deleteCotnact( contacto.id ).subscribe();
      }
    })
  }
}
