//BOM - browser object model

//altura y ancho de la pantalla
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    //tamaño del navegador definido por el compitador
    console.log(screen.width);
    console.log(screen.height);

    console.log(window.location);
}
function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url, "", "width=400","height=300");
}
getBom();