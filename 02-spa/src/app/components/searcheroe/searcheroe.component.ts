import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcheroe',
  templateUrl: './searcheroe.component.html'
})
export class SearcheroeComponent implements OnInit {
  heroes:any[] = [];
  termino:string;
  constructor(  private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService,
                private router:Router
  ) { }
    ngOnInit() {
        this.activatedRoute.params.subscribe( params => {
          debugger;
          if (params['termino'] != "") {
            this.termino = params['termino'];
            this.heroes = this._heroesService.buscarHeroes( params['termino'] );
          } else {
            this.termino = params['termino'];
            this.heroes = this._heroesService.getHeroes();
          }
    });
  }
  verHeroe( idx:number ) {
    debugger;
    this.router.navigate( ['/heroe', idx] );
  }
}
