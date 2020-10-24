
window.addEventListener('load',()=>{
    
    function intervalo(){
        //timers

        //setInterval => se ejecutada cada cierto intervalo
        //setTimeout => se ejecuta una sola vez
        var tiempo = setInterval(function(){
            console.log("ser interval ejecutado");
            var encabezado = document.querySelector("h1") ;
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
            
        }, 3000);

        return tiempo;
    }
    
    var tiempo = intervalo();
    //detener timer
    var stop = document.querySelector("#stop");
    stop.addEventListener("click",function(){
        alert("stop");
        clearInterval(tiempo);
    });


    var start = document.querySelector("#start");
    start.addEventListener("click",function(){
        alert("start");
        intervalo();
    });
});