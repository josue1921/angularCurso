import { Component } from '@angular/core';
import { PendientesService } from '../../services/pendientes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pendientes: string;
  constructor( public pendientesService: PendientesService,
               private router: Router,
               private alertCtrl: AlertController) {
              this.pendientes = "tab1";
  }
  async agregaLista(){
    //this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertCtrl.create({
      header: 'Describe tarea',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombra a tu tarea'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            console.log( data );
            if ( data.titulo.length === 0 ){
              return;
            }
             const listId = this.pendientesService.registerList( data.titulo );
             this.router.navigateByUrl(`/tabs/tab1/agregar/${ listId }`);
          }
        }
    ]
    });
    alert.present();
  }
}
