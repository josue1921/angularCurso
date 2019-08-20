import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    //Se agrega el parents debido a que va extraer el valor del padre en este caso de usuario.components.ts 
    //con eso el componente hijo tiene acceso a todos los datos enviados por url al padre y el hijo los leee
    this.route.parent.params.subscribe( data => {
      console.log( "Ruta hijo nuevo usuario" )
      console.log( data )
    })
   }

  ngOnInit() {
  }

}
