import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//ElementRef: hace la ferencia a los elementos de html del componente 
//HostListener: Escucha los eventos que pasan en el html del componente
//



@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  constructor( private el:ElementRef ) {}

   @Input("appResaltado") nuevoColor:string;

   @HostListener('mouseenter') mouseEntro(){
     this.resaltad( this.nuevoColor || 'yellow' );
   }
   @HostListener('mouseleave') mouseSalio(){
    this.resaltad( null );
   }

  private resaltad( color:string ){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
