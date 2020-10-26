

var numero1 = parseInt(prompt("numero 1: ",0));
var numero2 = parseInt(prompt("numero 2: ",0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("numero 1: ",0));
    numero2 = parseInt(prompt("numero 2: ",0));
}

var resultado = "la suma es: " + (numero1 + numero2)+ "<br/>"+ 
                "la resta es: " + (numero1 - numero2)+ "<br/>"+ 
                "la multiplicacion es: " + (numero1 * numero2)+ "<br/>"+ 
                "la division es: " + (numero1 / numero2)+ "<br/>"; 
                
document.write(resultado);