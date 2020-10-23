

/*
1-pida 6 numeros por pantalla y los meta en un array
2-mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola
3-ordenarlo y mostrarlo
4-invertir su orden y mostrarlo
5-mostrar cuantos elementos tiene el array
6-busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos, textoCustom="") {
    //mostrar en el cuerpo de la pagina
    document.write("<h1>contenido del array"+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>");
}
//pedir 6 numeros
//var numeros = new Array(6);
var numeros = [];
for (var i = 0; i <= 5; i++) {
    //numeros[i] = parseInt(prompt("introduce un numero",0));
    numeros.push(parseInt(prompt("introduce un numero", 0)));
}


//mostrar array en la consola
mostrarArray(numeros);

//ordenar y mostrar
numeros.sort();
mostrarArray(numeros,"ordenado");
console.log(numeros);

numeros.reverse();
mostrarArray(numeros,"reversa");
console.log(numeros);


//cuantos elementos tiene el array
document.write("<h1>cantidad de elementos:"+numeros.length+"</h1>");



var busqueda = parseInt(prompt("busca un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion != -1){
    document.write("<h1>encontrado</h1>");
    document.write("<h1>posicion de la busqueda: "+ posicion+"</h1>");
}else{
    document.write("<h1>no encontrado</h1>");
}




