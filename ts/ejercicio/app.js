// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
// function NombreHeroe(heroe : Heroe){
//   console.log("Nombre del Heroe: " +heroe.nombre);
//   console.log("Arte marcial: " +heroe.artesMarciales[3]);
// }
// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// NombreHeroe(batman);
// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
//convercion
var resultadoDobleF = function (a, b) { return (a + b) * 2; };
// console.log(resultadoDobleF(2,3));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = console.log(nombre + " tiene el poder de: " + poder + " y un arma: " + arma);
    }
    else {
        mensaje = console.log(nombre + " tiene un " + poder);
    }
}
;
// getAvenger("Joel","Volar","espada");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
    }
    Rectangulo.prototype.calcular = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
