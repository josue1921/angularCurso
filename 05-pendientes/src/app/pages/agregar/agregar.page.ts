import { Component } from '@angular/core';
import { PendientesService } from '../../services/pendientes.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  lista: Lista;
  nombreItem:string = '';

  constructor( private pendientesService: PendientesService,
               private route: ActivatedRoute ) {
    const listId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.pendientesService.obtenerLista( listId );
  }

  grabarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem( this.nombreItem, false );
    this.lista.items.push( nuevoItem );
    this.nombreItem = '';
    this.activeChanges();
  }
  cambioCheck( item: ListaItem ) {
    this.activeChanges();
  }
  borrar( i: number) {
    this.lista.items.splice( i, 1 );
    this.activeChanges();
  }
  activeChanges(){
    //contabilizar movimientos y grabar cambios en el storage
    //hacer persistente los cambios en el storage 
    const pendientes = this.lista.items.filter( itemData => !itemData.completado ).length;
    if ( pendientes === 0 ) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this.pendientesService.guardarStorage();
  }
}
