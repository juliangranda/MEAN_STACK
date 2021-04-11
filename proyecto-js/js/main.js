$(document).ready(function () {


    //slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    //posts
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
    
});

