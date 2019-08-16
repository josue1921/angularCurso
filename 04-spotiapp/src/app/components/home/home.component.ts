import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
/*  paises: any[] = [];

  constructor( private http: HttpClient ) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
             .subscribe( data => {
               this.paises = data;
                console.log(data);
             });
   }*/

   nuevasCanciones: any[] = [];
   loading: boolean;
   error: boolean;
   messageError: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe( data => {
        this.nuevasCanciones = data; 
        this.loading = false 
      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.messageError = errorServicio.error.error.message;
      });
  }

}
