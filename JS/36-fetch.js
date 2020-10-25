//fetch nos permite realizar una peticion AJAX de una forma simple, es decir una peticion a un backend
//es una llamada o peticion a un servicio de una API REST externa o un backend

//alert("Hola");

//fetch(ajax) y peticiones a servicios / api rest

//serivicios fake api rest
//javascript placeholder y reqres.in

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");
console.log(typeof usuarios)
//llamada AJAX
    
    getUsuarios()
    .then(data => data.json())        //recibe datos y los convierte a json
    .then(users => {
        console.log(usuarios);
        listadoUsuarios(users.data);

        
        return getInfo();
    })
    .then(data => {
        console.log(data);
        div_profesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);

    })
    .catch(error => {            //deteccion de errores se usa .catch
        console.log(error+ "error");
        alert("error en las peticiones");
    });


function getUsuarios(){
    return fetch('https://reqres.in/api/users'); //accede a un servicio remoto
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2'); //accede a un servicio remoto
}


function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarJanet(user) {

    let nombre = document.createElement('h3');
    let avatar = document.createElement('img');
    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';
    
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);
    document.querySelector("#janet .loading").style.display = 'none';

}


//CREAR PROMESAS
function getInfo(){
    var profesor = {
        nombre: 'julian',
        apellidos: 'gomez',
        url: 'https://facebook.com'
    };
    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);
            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');

            return resolve(profesor_string);
        },3000);
        
    });



}