$(document).ready(function(){
    console.log("hola");

    //load
    //$("#datos").load("https://reqres.in/");


    //metodo get y post

    $.get("https://reqres.in/api/users",{page: 2}, function(response){
        console.log(response);
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+" "+"</p>");
        });
    });





    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            nombre: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        console.log(usuario);
        /*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            console.log("usuario añadido correctamente");
        });
        */
        //metodo ajax
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data:usuario,
            beforeSend: function(){
                console.log("enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("a ocurrido un error")
            },
            timeout: 2000
        });
        return false;
    });


    


});