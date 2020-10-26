$(document).ready(function(){
    console.log('hola');


    $("#mostrar").hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeIn();
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeOut();
    });

    $("#todoenuno").click(function(){
        $('#caja').toggle('fast');
    });

    $("#animar").click(function(){
        $("#caja").animate({marginLeft: '500px', fontSize: '40px', height: '110px'},'slow')
        .animate({borderRadius: '900px', marginTop: '80px'},'fast')
        .animate({borderRadius: '0px', marginLeft: '0px'},'slow')
        .animate({borderRadius: '100px', marginTop: '0px'},'slow');
    });
});