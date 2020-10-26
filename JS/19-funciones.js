function calculadora(num1, num2){
    console.log("suma:"+(num1+num2)); 
    console.log("resta:"+(num1-num2)); 
    console.log("multiplicacion:"+(num1*num2)); 
    console.log("division:"+(num1/num2)); 
}
calculadora(10,15);

/*
for(var i = 1; i <= 10; i++){
    calculadora(i, 8);
}
*/

//funcion dentro de otra
function porConsola(num1,num2){
    console.log("suma:"+(num1+num2)); 
    console.log("resta:"+(num1-num2)); 
    console.log("multiplicacion:"+(num1*num2)); 
    console.log("division:"+(num1/num2)); 
    console.log("***********************************")
}
function porPantalla(num1,num2){
    document.write("suma:"+(num1+num2)+"<br/>"); 
    document.write("resta:"+(num1-num2)+"<br/>"); 
    document.write("multiplicacion:"+(num1*num2)+"<br/>"); 
    document.write("division:"+(num1/num2)+"<br/>"); 
    console.log("***********************************")
}


//parametros opcionales
function calculadoraOpcional(num1, num2, mostrar = false){
    if(mostrar == false){
        porConsola(num1,num2);
    }else{
        porPantalla(num1,num2);
    }
    return true;
}

calculadoraOpcional(5,5);
calculadoraOpcional(4,2,true);