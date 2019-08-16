import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//configuracion que permite configurar el modulo a un idioma deseado
import { LOCALE_ID } from '@angular/core';

//importar un pipe personalizado
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios
import { HeroesService } from './servicios/heroes.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearcheroeComponent } from './components/searcheroe/searcheroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { PipesComponent } from './components/pipes/pipes.component';

//configuracion pipe de fecha a español
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ConstrasenaPipe } from './pipes/constrasena.pipe';
registerLocaleData(localeEs);


@NgModule({
  declarations: [
  //declarar un pipe
    CapitalizadoPipe,

    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearcheroeComponent,
    HeroeTarjetaComponent,
    PipesComponent,
    DomseguroPipe,
    ConstrasenaPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    //Habilitar la configuracion al idioma español en las fechas
    {provide: LOCALE_ID, useValue: "es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
