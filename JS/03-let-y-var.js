//pruebas con let y var

//prueba con var
var numero = 40;
console.log(numero) // valor es 40
if(true){
    var numero = 50;
    console.log(numero); //valor es 50
}
console.log(numero); // valor es 50


var texto = "JS";
console.log(texto); //valor JS

if(true){
    let texto = "js let";
    console.log(texto); //valor es js let
}

console.log(texto); //valor es JS
