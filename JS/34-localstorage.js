

//localstorage


//comprobar disponibilidad de localstorage
if(typeof(storage) !== 'undefined'){
    console.log("localstorage disponible");
}else{
    console.log("incompatible con localstorage");
}


//guardar datos 
localStorage.setItem("titulo","curso de js");

//recuperar elemento
console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//guardar objetos
var usuario = {
    nombre: "julian",
    email: "julian@hotmail.com",
    web: "google.com"
};


//nota: la informacion de un objeto cuando se va a mandar al local storage
// se debe de enviar en json string por esto es que se JSON:stringify que es el que permite llevar acabo dicha accion
localStorage.setItem("usuario", JSON.stringify(usuario));


//recuperar objeto del local storage

//convierte un string json en un objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(" "+userjs.web+ " "+ userjs.nombre);

//eliminar o remover informacion del localstorage
//localStorage.removeItem("usuario");

//limpiar o remover todo
localStorage.clear();
