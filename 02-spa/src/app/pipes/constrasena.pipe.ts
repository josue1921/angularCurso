import { Pipe, PipeTransform } from '@angular/core';
import { strictEqual } from 'assert';

@Pipe({
  name: 'constrasena'
})
export class ConstrasenaPipe implements PipeTransform {

  transform(value: any, bandera:boolean ): string {
    if (bandera) {
      let acum:string = "";
      for (let i = 0; i < value.length; i++) {
        acum += "*";
      }
      return acum;
    } else {
      return value;
    }
  }

}
