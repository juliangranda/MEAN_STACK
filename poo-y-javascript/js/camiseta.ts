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


    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

var camiseta = new Camiseta();
console.log(camiseta);

camiseta.setColor("rojo");
console.log(camiseta.getColor(),camiseta);

//segundo objeto
var playera = new Camiseta();
console.log(playera);
playera.setColor("azul");
console.log(camiseta.getColor(),playera);