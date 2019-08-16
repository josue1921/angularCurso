
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [/*declaran los componentes que usa el modulo*/
    ListasComponent
],
exports: [
  //Para declarar que el componente sera usado fuera del modulo
  ListasComponent
],
imports: [
    IonicModule,
    PipesModule,
    CommonModule
]
})
export class ComponentsModule { }
