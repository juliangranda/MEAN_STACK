
var number = parseInt(prompt("introduce un numero", 0));

while(isNaN(number)){
    number = parseInt(prompt("introduce un numero", 0));
}


if(number % 2 == 0){
    alert("es un numero par");
}else{
    alert("es impar");
}




