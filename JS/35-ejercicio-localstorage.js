

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
    console.log("entra");
    var titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
    
});
var ul = document.querySelector('#peliculas-list');
for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }

}





var formulariob = document.querySelector("#formborrarPeliculas");

formulariob.addEventListener('submit', function(){
    console.log("entra");
    var titulo = document.querySelector("#borrarPelicula").value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
    
});