import { Component } from '@angular/core';
import { PendientesService } from '../../services/pendientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  terminados: string;
  constructor( public pendientesService: PendientesService,
               private router: Router
                ) {
  this.terminados = "tab2";
  }
}

