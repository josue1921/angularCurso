import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;
  error: boolean = false;
  messageError: string;

  constructor( private spotify: SpotifyService ) {

  }
  buscar(termino: string) {
    if (termino != "") {
      this.loading = true;
      this.spotify.getArtista( termino )
          .subscribe( data => {
            this.artistas = data; 
            this.loading = false;
          } , (errorServicio) => {
            this.loading = false;
            this.error = true;
            this.messageError = errorServicio.error.error.message;
          });
    }
  }
}
