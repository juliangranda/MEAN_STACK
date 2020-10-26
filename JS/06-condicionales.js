var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("edad 1 es mayor que edad 2");
}else{
    console.log("la edad 1 es inferior");
}

//operadores relacionales
/*
    mayor: >
    menor: <
    mayor o igual: >=
    menor o igual: <=
    igual: ==
    distinto: !=
*/
var edad = 18;
var nombre = 'julian';

if(edad >= 18){
    console.log(nombre + "tiene "+ edad+ "es mayor de edad" );
    if(edad <= 33){
        console.log("todavia eres millenial");
    }else if(edad >= 70){
        console.log("eres anciano");
    }else{
        console.log("no eres millenial");
    }
}else{
    console.log(nombre + "es menor de edad");
}




/*
//operadores logicos
AND: &&
OR: ||
negacion: !

*/
var year = 2018;

//negacion
if(year != 2016){
    console.log("el año no es 2016");
}

//AND
if(year >= 2000 && year <= 2020 && year != 2018){

    console.log("estamos en la era actual");
}else{
    console.log("estamos en la era post moderna");
}

//OR
if(year == 20008 || (year == 2018 && year == 2028) ){
    console.log("el año acaba en 8");
}else{
    console.log("año no registrado");
}
