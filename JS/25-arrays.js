//array normal
var nombres = ["julian","david","gomez","granda"];

//array como un objeto
var lenguajes = new Array("php","js","go","java");

console.log(nombres);
console.log(lenguajes);
console.log(nombres[2]);


console.log(nombres.length);
/*
var elemento = parseInt(prompt("que elemento del array quieres?",0));
if(elemento >= nombres.length){
    alert("introduce el numero correcto menor que "+ nombres.length);
}else{
    alert("el usuario seleccionado es "+nombres[elemento]);
}

*/

/*
document.write("<h1>lenguajes de programacion</h1>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

*/

/*
//foreach => este metodo es mas limpio
lenguajes.forEach((elemento, indice, array)=> {
    //console.log(array);
    document.write("<li>"+indice+" "+elemento+"</li>");
});
*/

//for in

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

//busquedas

var busqueda = lenguajes.find((lenguaje)=> lenguaje == "js");
var busqueda2 = lenguajes.findIndex((lenguaje)=> lenguaje == "php");
console.log(busqueda);
console.log(busqueda2);


//comprobar cuantos elementos cumplen una condicion en el array
var precios = [10,20,50,80,12];
var busqueda3 = precios.some(precio => precio <10);
console.log(busqueda3);