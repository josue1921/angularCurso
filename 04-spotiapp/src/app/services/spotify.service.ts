import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    //console.log("spotify service listo");
  }
  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer BQB1LoPRqiXXZu8I6ODDV4S87-k0RDY2FPsoRRBYvmjekTaafS96ooHI5qoLjyT6tbfRO5KrdsqevamR0b0'
    });

    return this.http.get(url, { headers });
  }
  getNewReleases() {
    //this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers } )
    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ));
  }
  getArtista( termino: string ) {
    //return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers }).pipe( map( data => data['artists'].items ));
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items ));
  }
  getArtistaSongs( idArtist: string ) {
    //return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers }).pipe( map( data => data['artists'].items ));
    return this.getQuery(`artists/${ idArtist }`);
  }
  getTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`).pipe( map( data => data['tracks']) );
  }
}
