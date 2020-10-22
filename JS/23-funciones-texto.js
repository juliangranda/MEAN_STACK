

//transformacion de textos
var numero = 444;
var texto1 = "Bienvenido julian a julian";
var texto2 = "eres muy bueno";

/*
var dato = numero.toString();
dato = texto1.toLowerCase();
dato = texto2.toUpperCase();

console.log(dato);

//calcular longitud de un texto
var nombre = "julian";

nombre = ["hola","hi"];

console.log(nombre.length);


//concatenar
//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

*/

//metodos de busqueda
var busqueda = texto1.indexOf("julian");
var busqueda2 = texto1.lastIndexOf("julian");
var busqueda3 = texto1.search("julian");
var busqueda4 = texto1.match("julian");
var busqueda5 = texto1.substr(14,5);
var busqueda6 = texto1.charAt(2);
var busqueda8 = texto1.startsWith("Bien");
console.log(busqueda2);
console.log(busqueda);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda8);


//funciones de reemplazo
var reemplazo = texto1.replace("julian","granda");
var reemplazo2 = texto1.slice(14,22);
var reemplazo3 = texto1.split(" ");
var reemplazo4 = texto1.trim();
console.log(reemplazo);
console.log(reemplazo2);
console.log(reemplazo3);
console.log(reemplazo4);







