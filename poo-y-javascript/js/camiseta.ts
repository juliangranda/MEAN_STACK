//clase(molde del objeto)

//propiedades(caracteristicas del objeto)

//metodos(funciones o acciones que va a realizar el objeto)

//la clase se debe llamar igual que el fichero para que se pueda utilizar
class Camiseta{
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //se usa para darle un valor por defecto a las propiedades de la  clase
    constructor(color, modelo, marca, talla ,precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

var camiseta = new Camiseta("rojo","manga larga","nike","L",14);
console.log(camiseta);

camiseta.setColor("Rojo");
console.log(camiseta.getColor(),camiseta);

