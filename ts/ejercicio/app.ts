
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};

interface Heroe{
  nombre:string;
  artesMarciales:string[];
}

// function NombreHeroe(heroe : Heroe){
//   console.log("Nombre del Heroe: " +heroe.nombre);
//   console.log("Arte marcial: " +heroe.artesMarciales[3]);

// }

// Cree una interfaz que sirva para validar el siguiente objeto
let batman:Heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
// NombreHeroe(batman);

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}
//convercion
let resultadoDobleF = (a:number, b:number) => (a + b)*2;
// console.log(resultadoDobleF(2,3));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string ="arco" ){
  var mensaje:string;
  if( poder ){
     mensaje = console.log(nombre + " tiene el poder de: " + poder + " y un arma: " + arma);
  }else{
     mensaje = console.log(nombre + " tiene un " + poder)
  }
};
// getAvenger("Joel","Volar","espada");

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo{
  base:number;
  altura:number
  

  calcular():number{
    
    return this.base*this.altura;
  }
}


