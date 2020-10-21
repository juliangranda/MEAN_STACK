//switch


var edad = 18;
var imprime = "";
switch(edad){
    case 18:
        imprime = "acabas de cumplir mayoria de edad";
        break;
    case 25:
        imprime = "ya eres adulto";
        break;
    case 40:
        imprime = "crisis de los cuarenta";
        break;
    default:
        imprime = "tu edad es neutra";
        break;

}

console.log(imprime);

