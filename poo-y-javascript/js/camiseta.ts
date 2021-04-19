//interface: es un contrato donde definimos que propiedades y que metodos obligatorios va a tener dicha clase
//si se rompe el contrato cambiandole el nombre o cualquier otro motivo generara error
interface CamisetaBase{

    setColor(color);
    getColor();
}


//clase(molde del objeto)

//propiedades(caracteristicas del objeto)

//metodos(funciones o acciones que va a realizar el objeto)

//la clase se debe llamar igual que el fichero para que se pueda utilizar
class Camiseta implements CamisetaBase{
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

//clase hija (herencia)
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha){
        this.capucha = capucha;
    }
    getCapucha(): boolean{
        return this.capucha;
    }
}



var camiseta = new Camiseta("fada","fafa","dfafa","fafa",12);
console.log(camiseta);


var sudadera_nike = new Sudadera("rojo","manga larga", "nike", "L", 12);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("morado");
console.log(sudadera_nike);
