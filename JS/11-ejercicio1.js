
var numero1 = parseInt(prompt('introduce el primer numero', 0));
var numero2 = parseInt(prompt('introduce el segundo numero', 0));

console.log(numero1, numero2);

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ){
     numero1 = parseInt(prompt('introduce el primer numero', 0));
     numero2 = parseInt(prompt('introduce el segundo numero', 0));
}
if(numero115 == numero2){
    alert("los numeros son iguales");
}else if(numero1 > numero2){
    alert("el numero 1 es mayor al numero 2");
}else if(numero1 < numero2){
    alert("el numero 2 es menor al numero 1");
}else{
    alert("introduce numeros correctos");
}
