import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  //puede venir desde fuera (puede) @input
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }
  verHeroe() {
    //para emitir evento al padre emite el heroe seleccionado
    //this.heroeSeleccionado.emit( this.index );
    this.router.navigate( ['/heroe', this.index] );
  }
}
