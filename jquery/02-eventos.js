$(document).ready(function () {
    //alert("eventos.js cargado");

    
    //mouseOver y mouseOut
    var caja = $("#caja");
    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green");
    })
    */

   function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }
    //hover
    caja.hover(cambiaRojo,cambiaVerde);

    //click dobleclick

    caja.click(function(){
        $(this).css("background","blue").css("color","white");
    })


    caja.dblclick(function(){
        $(this).css("background","pink").css("color","yellow");
    })


    //blur y focus
    var nombre = $("#nombre");
    var datos = $("#datos");
    nombre.focus(function(){
        $(this).css("border","2px solid green");
    })

    nombre.blur(function(){
        $(this).css("border","1px solid #ccc");
        
        datos.text($(this).val()).show();
    })

    //mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color","gray");
        console.log("mmm")
    })

    datos.mouseup(function(){
        $(this).css("border-color","black");
    })

    //mouse move
    $(document).mousemove(function(){
        console.log(event.clientX);
        console.log(event.clientY);

        var sigueme = $('#sigueme');
        
        sigueme.css("left",event.clientX);
        sigueme.css("top",event.clientY);
    })

})