import { Injectable } from "@angular/core";
import { Lista } from "../models/lista.model";
import { ListaItem } from '../models/lista-item.model';

@Injectable({
  providedIn: "root"
})
export class PendientesService {
  listas: Lista[] = [];
  item: ListaItem[] = [];

  constructor() {
    this.cargarStorage();
  }
  registerList(titulo: string) {
    let newtask = new Lista(titulo);
    this.listas.push(newtask);
    this.guardarStorage();
    return newtask.id;
  }

  obtenerLista( id: string | number ) {
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id)
  }

  //Para grabar datos en el localstorage de google
  guardarStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }
  //Para carga datos alojados en el localstorage de google
  cargarStorage() {
    if (localStorage.getItem( 'data' ) ) {
      this.listas = JSON.parse( localStorage.getItem( 'data' ) );
    }
  }

  //Eliminar registro de pendientes 
    deletePendiente( lista: Lista ) {
    /*  for (let i = 0; i < this.listas.length; i++) {
        if ( this.listas[i].id === id ) {
          this.listas.splice(i, 1);
          this.guardarStorage();
          return;
        }
      }
    }*/
      this.listas = this.listas.filter( data => data.id !== lista.id);
      this.guardarStorage();
    }
}