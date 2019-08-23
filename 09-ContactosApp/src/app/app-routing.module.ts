import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactosComponent } from './pages/contactos/contactos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
const routes: Routes = [
  {path : 'contactos', component: ContactosComponent},
  {path : 'contacto/:id', component: ContactoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'contactos'}
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
