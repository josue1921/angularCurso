import { Component, OnInit, Input,  Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() items: any = {};
  @Input() index: number;

  constructor( private router: Router) {
  }

  ngOnInit() {
  }
  verArtista( item: any ){
    let artistId;
    switch (item.type) {
      case "artist":
        artistId = item.id;
        break;
      case "album":
        artistId = item.artists[0].id;
      break;
    }
    this.router.navigate([ '/artist', artistId ]);
  }
}
