export class ContactoModel {
    id: string;
    nombre: string;
    phone: number;
    email: string;
    estatus: boolean;

    constructor() {
        this.estatus = true;
    }

}