


var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['la verdad duele','la vida es bella','gran torino'];

var cine = [categorias, peliculas];


//ordenar arrays
peliculas.sort();
peliculas.reverse();

//console.log(cine[0][1]);


/*
//operacion entre arrays
var elemento = "";


do{
    var elemento = prompt("introduce tu pelicula: ");


    //añadir nuevo elemento
     peliculas.push(elemento);


}while( elemento != "ACABAR");

//eliminar el ultimo elemento de un array
peliculas.pop();
*/

//para buscar el indice de alguna cosa en especifico
var indice = peliculas.indexOf('gran torino');
console.log(indice);

if(indice > -1){
    peliculas.splice(indice,1);
}


//convertir array  a texto
var peliculas_string = peliculas.join();

console.log(peliculas_string);
console.log(peliculas);


//convertir un string a un array

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);




