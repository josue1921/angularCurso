import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {
  nombre: string = "Josue";
  nombre2: string = "aloNdRa sancHez cAstoNo";
  arreglo:any[] = [1,2,3,4,5,6,7,8,9,10];
  PI:any = Math.PI;
  a = 0.234;
  salario = 1234.5;
  polymer = {
    nombre: "Josue",
    clave: "EJSC",
    edad: 24,
    direccion: {
      calle: "aldama",
      colonia: "Villa seca",
      mni: "Otzolotepec",
      cp: 52089
    }
  }
  valorDePromesa = new Promise ( ( resolve, reject ) => {
    setTimeout( ()=>resolve('LLego la data'), 3500);
  });
  fecha = new Date();
  ligaV = "64t3a2qV_rg";
  activar:boolean = true;


  constructor() { }

  ngOnInit() {
  }

}
