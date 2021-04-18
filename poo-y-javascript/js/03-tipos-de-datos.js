console.log("tipos de datos typescript");
//string
var cadena = "julian";
//number
var numero = 12;
//boolean
var verdader_false = true;
//any
var cualquiera = "hola";
//arrays
//fuertemente tipado que es un array y solo de valores tipo string, igualmente 
//puede ser otro tipo de datos inclusive tipo "any"
var lenguajes = ["PHP", "JS", "CSS"];
//array de numeros
var years = [11, 12, 13];
console.log(cadena, numero, verdader_false, cualquiera, lenguajes, years);
//---------------------------------------------------------------------------------//
//multiples tipos de datos
//---------------------------------------------------------------------------------//
//es como un or , o string o number cualquiera puede ser
var cadena_multiple = "julian";
console.log(cadena_multiple);
cadena_multiple = 21;
console.log(cadena_multiple);
var nuevotipodato = "datopersonalizado";
//------------------------------------------------------------------------------------//
/*let vs var
    let es solo el cambio para esa seccion
    var es un cambio a nivel global
*/
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    //solo cambia numero1 por el "let" en este bloque la variable a nivel global no cambia
    //la variable numero2 cambia a nivel global dado que es tipo "var"
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
