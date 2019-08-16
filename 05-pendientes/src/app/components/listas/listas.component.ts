import { Component, OnInit, Input, Output } from "@angular/core";
import { PendientesService } from "../../services/pendientes.service";
import { Router } from "@angular/router";
import { Lista } from '../../models/lista.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"]
})
export class ListasComponent implements OnInit {
  //se agrega la referencia al unico ionlist de mi html su hubiera mas seria un array de ionlist y se invoca de la siguiente manera:
  @Input() tab = true;
  //referencia local en el html se coloca en el tag #lista se accede a ella de la siguiente manera:
  //@ViewChild( 'lista' ) lista: IonList;

  listas: any[] = [];
  lista: Lista;

  constructor(
    public pendientesService: PendientesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}
  ngOnInit() {
  }
  viewDetail(listas: Lista) {
    const id = Number(listas.id);
    if (this.tab === true) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${id}`);
    }
  }
  borrar(i: Lista) {
    this.pendientesService.deletePendiente( i );
  }
  async editar( i: Lista ) {
      const alert = await this.alertCtrl.create({
        header: 'Editar nombre lista',
        inputs: [
          {
            name: 'titulo',
            type: 'text',
            value: i.titulo
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              this.pendientesService.cargarStorage()
            }
          },
          {
            text: 'Guardar',
            handler: ( data ) => {
              if ( data.titulo.length === 0 ){
                return;
              }
              i.titulo = data.titulo;
              this.pendientesService.guardarStorage();
              this.pendientesService.cargarStorage();
            }
          }
      ]
      });
      alert.present();
    }



}
