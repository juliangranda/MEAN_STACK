//funciones anonimas
//es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "la pelicula es:"+nombre;
}

//callback
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar =numero1+ numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5,7, function(dato){
    console.log("la suma es:", dato);
}, function(dato){
    console.log("la suma por dos es:", (dato*2));
});

//arrow function , es una manera mas limpia de hacer un callback
sumame(5,7, dato => {
    console.log("la suma es:", dato);
}, dato => {
    console.log("la suma por dos es:", (dato*2));
});
