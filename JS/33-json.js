//JSON -> javascript object notation

var pelicula = {
    titulo: 'Batmas vs superman',
    year: 2017,
    pais: 'Estados unidos'
};

//objetos dentro de un array
var peliculas = [
    {titulo:"la verdad duele",year: 2016,pais:"francia"},
    pelicula
];

console.log(pelicula);
console.log(pelicula.titulo);

pelicula.titulo = "superman begins";
console.log(pelicula.titulo);


console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+ "-"+ peliculas[index].year);
    caja_peliculas.append(p);
}

