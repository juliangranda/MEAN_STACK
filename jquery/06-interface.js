$(document).ready(function(){
    console.log("hola");

    //mover elemento por la pagina
    $(".elemento").draggable();

    //redimensionar
    $(".elemento").resizable();

    //seleccionable, seleccionar y organizar
    //$(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable({
        update:function(event, ui){
            console.log("ha cambiado la lista");
        }
    });

    //droppable
    $("elemento-movido").draggable();
    $("#area").droppable({
        drop:function(){
            console.log("has soltado algo dentro de el area");
        }
    });

    //efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle();
    });


    //tooltip
    $(document).tooltip();

    //dialog
    $("#popup").dialog();

    //datepicker
    $("#calendario").datepicker();


    //tabs
    $("#pestanas").tabs();
});