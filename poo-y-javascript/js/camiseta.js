//clase(molde del objeto)
//propiedades(caracteristicas del objeto)
//metodos(funciones o acciones que va a realizar el objeto)
//la clase se debe llamar igual que el fichero para que se pueda utilizar
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "manga larga", "nike", "L", 14);
console.log(camiseta);
camiseta.setColor("rojo");
console.log(camiseta.getColor(), camiseta);
