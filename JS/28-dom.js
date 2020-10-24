//DOM - document object model

function cambiaColor(color){
    caja.style.background = color;
}

var caja = document.getElementById("micaja");
//var caja = document.querySelector("#micaja");

caja.innerHTML = " TEXTO EN LA CAJA DESDE JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

console.log(caja);

//conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr);

//conseguir elementos por su clase = con getelementsbytagname se puede SELECCIONAR VARIOS ELEMENTOS
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}


//query selector = con query solo se puede SELECCIONAR 1 SOLO ELEMENTO
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);






