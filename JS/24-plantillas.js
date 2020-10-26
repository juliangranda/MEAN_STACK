
//plantillas de texto

var nombre = prompt("mete un nombre");
var apellidos = prompt("mete tus apellidos");

//var texto = "mi nombre es:" + nombre + "<br/> mis apellidos son: "+ apellidos;
var texto = `
    <h1>hola que tal </h1>
    <h3>mi nombre es: ${ nombre}</h3>
    <h3>mi apellido es: ${ apellidos}</h3>
`;
document.write(texto);