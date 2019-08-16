import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artist: any = {};
  tracks: any[] = [];
  loading: boolean;
  constructor( private spotify: SpotifyService,
               private router: ActivatedRoute
  ) {
    this.router.params.subscribe( params => {
      this.loading = true;
      this.getArtista(params[ 'id' ]);
      this.getTopTracks( params['id'] );
    });
  }
  getArtista( id: any){
    this.spotify.getArtistaSongs( id )
        .subscribe( artista => {this.artist = artista; this.loading = false;});
  }
  getTopTracks( id: string){
    this.spotify.getTracks( id )
        .subscribe( songs => { this.tracks = songs; console.log(songs);
         });
  }
}
