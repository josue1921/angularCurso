//Interfaces en typeScrpit
// interface Xmen{
//   nombre:string,
//   poder:string
// }
//
// function enviarMision ( xmen : Xmen ){
//   console.log("Enviado a: " + xmen.nombre );
// }
// function enviarCuartel( xmen : Xmen ){
//   console.log("Enviado al cuartel: " + xmen.nombre );
// }
// let wolverine:Xmen = {
//   nombre: "wolverine",
//   poder: "Regeneración"
// };
//
// enviarMision(wolverine);
// enviarCuartel(wolverine);

//Decoradores de clasess
// function consola( constructor:Function ){
//     console.log( constructor );
// }
//
// @consola
// class Villano{
//     constructor( public nombre:string ){
//     }
// }
//


let nombre:string = "Ricardo Tapia";
let edad:number = 23;
const PERSONAJE : {nombre:string, edad:number} = {
  nombre: nombre,
  edad: edad
}


interface Personaje{
  nombre:string,
  artesMarciales: string[];
}

// Cree una interfaz que sirva para validar el siguiente objeto
let batman:Personaje = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log("Objeto validado: " + batman.nombre)


// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }


let resultadoDoble = (a:number,b:number) => (a + b) * 2;




// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje:string;
  if( poder ){
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = `${nombre} tiene un ${poder}`;
  }
  return mensaje;
};

console.log( getAvenger("Thor" , "trueno") );

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  base:number;
  altura:number;
  constructor( base:number, altura:number) {
        this.base = base;
        this.altura = altura;
    }

  calculaArea():number{
    return this.base * this.altura;
  }

}

let operacion:Rectangulo = new Rectangulo(2, 8);
console.log(operacion.calculaArea());
