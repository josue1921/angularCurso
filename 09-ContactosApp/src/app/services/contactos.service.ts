import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactoModel } from '../models/contacto.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
   private url = "https://agendascrum.firebaseio.com";
  constructor( private http: HttpClient) { }

  creaContacto( contacto: ContactoModel ) {
    return this.http.post(`${ this.url }/contactos.json/`, contacto)
    .pipe(
        map( (data: any) => {
          contacto.id = data.name;
          return contacto;
      })
    );
  }
  actualizaContact( contacto: ContactoModel ){
    const contactoTemp = {
      // internamento realiza un getter y setter los parametros de un objeto a un objeto temporal
      ...contacto
    };
    //funcion que eliminar del nuevo objeto esa propiedad
    delete contactoTemp.id;
    return this.http.put(`${ this.url }/contactos/${ contacto.id }.json`, contactoTemp)
  }
  getContactos() {
    return this.http.get(`${ this.url }/contactos.json`)
              //tranformas los objetos a un array para que sea iterable
              .pipe(
                //map tranforma la informacion y regresa alguna otra cosa
                map( this.creaArreglo ),
                delay(0)
              );
  }
  private creaArreglo( contactosObj: object) {
    const contactos: ContactoModel[] = [];
    if ( contactosObj === null ) { return []; }

    Object.keys( contactosObj ).forEach(key => {
      const contacto: ContactoModel = contactosObj[key];
      contacto.id = key;
      contactos.push( contacto );
    })
    return contactos;
  }

  getContact( id: string ){
    return this.http.get(`${ this.url }/contactos/${ id }.json`);
  }
  deleteCotnact( id:string ) {
    return this.http.delete(`${ this.url }/contactos/${ id }.json`);
  }
}
