console.log("js");

var bicicleta = {

    color: 'rojo',
    modelo: 'bmx',
    frenos: 'de disco',
    velocidadMaxima: '60km',


    cambiarColor: function(nuevo_color){
        //bicicleta.color = nuevo_color
        this.color = nuevo_color;
        console.log(this);
    }
};

console.log(bicicleta);

bicicleta.cambiarColor("azul");
