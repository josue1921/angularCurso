import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;
    frase: any = {
        mensaje: 'Quiero ir a tomorrowlad, para el 2021',
        autor: 'Josue Sanchez'
    };
    djsmundiales: string[] = ['Armin van burren', 'Hardwell', 'Mariana BOo'];

}