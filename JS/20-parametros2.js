

//parametros REST y SPREAD: reciben una cantidad indefinida de parametros

//REST: recibe el resto de los demas parametros -> parecido a arg o kwargs de python
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("fruta 1: "+ fruta1);
    console.log("fruta 2: "+ fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("naranja","manzana", "sandia", "pera", "melon")

//spread
var frutas = ["naranja", "manzana"];
listadoFrutas(...frutas, "sandia", "pera", "melon");
