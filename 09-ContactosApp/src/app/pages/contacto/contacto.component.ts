import { Component, OnInit } from '@angular/core';
import { ContactoModel } from '../../models/contacto.model';
import { NgForm } from '@angular/forms';
import { ContactosService } from '../../services/contactos.service';

//alertas dinamicas para sistemas
import Swal from 'sweetalert2';
//observables rxjs
import { Observable } from 'rxjs';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  contacto = new ContactoModel();

  constructor( private contactosService: ContactosService, 
               private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if( id !== 'nuevo') {
      this.contactosService.getContact( id )
          .subscribe( (data: ContactoModel) => { this.contacto = data; this.contacto.id = id; });
    }
  }
  _saveData( form: NgForm ) {
    if( form.invalid ) {
      console.log('Formaulario no valido');
      return;
    }
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    let peticion: Observable<any>;

    if ( this.contacto.id ) {
      peticion = this.contactosService.actualizaContact( this.contacto );
    } else {
      peticion = this.contactosService.creaContacto( this.contacto );
    }
    peticion.subscribe( respo => {
      Swal.fire({
        title: this.contacto.nombre,
        text: 'Se actualizó correctamente',
        type: 'success'
      });
    });
  }
}
