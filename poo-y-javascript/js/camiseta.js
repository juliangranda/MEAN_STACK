//clase(molde del objeto)
//propiedades(caracteristicas del objeto)
//metodos(funciones o acciones que va a realizar el objeto)
//la clase se debe llamar igual que el fichero para que se pueda utilizar
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
console.log(camiseta);
camiseta.setColor("rojo");
console.log(camiseta.getColor(), camiseta);
//segundo objeto
var playera = new Camiseta();
console.log(playera);
playera.setColor("azul");
console.log(camiseta.getColor(), playera);
