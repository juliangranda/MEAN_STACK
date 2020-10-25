
var fecha = new Date();

console.log(fecha);
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var textoHora = `
    El año es: ${year}
    el mes es: ${mes} //empieza a contar desde 0
    el dia es: ${dia}
    la hora es: ${hora}
`

console.log(textoHora);

console.log(Math.random()*10);