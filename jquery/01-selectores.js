//el simbolo del $ = JQuery es lo mismo

/*
$(<selector>).<metodo>
*/
$(document).ready(function () {
    console.log("estamos listos");


    //selector de ID
    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green");

    $("#verde").css("background", "green")
        .css("color", "white");


    //selector de clase
    var mi_clase = $('.zebra');
    console.log(mi_clase);
    

    $('.sin_borde').click(function(){
        $(this).addClass('zebra');
        
    });


    //selectores de etiqueta
    var parrafos = $('p').css("cursor", "pointer");
    
    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass('grande')){
            that.addClass('grande')
        }else{
            that.removeClass('grande');
        }
        
    });

    //selectores de atributo
    $('[title="google]').css('background','#ccc');
    $('[title="facebook]').css('background','blue');


    //otros
    //$('p,a').addClass('margen-superior');

    var busqueda = $('#elemento2').parent().parent().find('.resaltado');
    console.log(busqueda);
});