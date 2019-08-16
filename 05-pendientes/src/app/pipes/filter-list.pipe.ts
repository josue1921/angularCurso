import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filterList',
  //Habilitar el proceso de deteccion de cambios en mi componente
  /* el cambio se hace fuera del componente original angular no refresca cuando se activo el ciclo de deteccion de cambios
    agregar propiedad pure por defecto todos los pipes son puros solo se llaman cuando la accion del ciclo de cambios  suceda en el mismo componente donde sean usados*/
  pure: false
})
export class FilterListPipe implements PipeTransform {
  transform(listas: Lista[], complet: boolean = true): Lista[] {
    return  listas.filter( data => data.terminada === complet );
  }

}
