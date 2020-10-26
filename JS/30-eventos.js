//los eventos son funciones que se ejecutan cada que sucede algo,ejm: cuando el usuario hace algo

//eventos del raton


//evento load
//se utiliza para esperar hasta que todos los elementos html esten cargados en el DOM
window.addEventListener('load',()=> {

    function cambiarColor(){

        console.log("me has dado click");
        var bg = boton.style.background;
    
        if(bg == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
    
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
    
        return true;
    }
    var boton = document.querySelector("#boton");
    
    
    //NOTA
    //evento click
    //mejor practica que usar el evento onclick en un tag en html
    boton.addEventListener('click', function(){
        cambiarColor();
    });
    
    //MOUSE OVER
    
    boton.addEventListener('mouseover',function(){
        boton.style.background = "yellow";
    });
    
    //MOUSE OUT
    boton.addEventListener('mouseout',function(){
        boton.style.background = "#ccc";
    });
    
    
    //focus
    var input =  document.querySelector("#campo_nombre");
    
    input.addEventListener('focus',function(){
        console.log("[focus] estas dentro del input");
    });
    
    //blur
    input.addEventListener('blur',function(){
        console.log("[blur] estas fuera del input");
    });
    
    //keydown
    input.addEventListener('keydown',function(event){
        console.log("[keydown] pulsando esta tecla", String.fromCharCode(event.keyCode));
    });
    
    //keypress
    input.addEventListener('keypress',function(event){
        console.log("[keypress] tecla presionada", String.fromCharCode(event.keyCode));
    });
    
    //keyup
    input.addEventListener('keyup',function(event){
        console.log("[keypress] tecla soltada", String.fromCharCode(event.keyCode));
    });
    
    
    
    
});


