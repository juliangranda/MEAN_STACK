$(document).ready(function () {


    //slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }

    //posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
            },
        ];
    
    //console.log(posts);

        posts.forEach((item, index) => {
            var post = `                
                <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer mas</a>
            </article>`;
            
            $("#posts").append(post);
            
        });
    }

    //selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });


    //scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });



    //login falso

    $("#login form").submit(function(){

        var form_name = $("#form_name").val();
        localStorage.setItem("form_name",form_name);

    });


    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido," + form_name + "<strong>");
        about_parrafo.append("<a href='#' id= 'logout'> Cerrar sesion </a>");

        $("#login").hide();


        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();

    }

    //reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            console.log(reloj);
    
            $("#reloj").html(reloj);
        }, 1000);

    }

    //validacion
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yyyy'
        });

        $.validate({
            lang:'es'
        });
    }   




});

