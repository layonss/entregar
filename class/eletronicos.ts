export class eletonicos{
    Marca: string;
    sistemaOperacional: string;
    fabricante: string;

    constructor(
        Marca: string,
        sistemaOperacional: string,
        fabricante: string
    ){
        this.Marca = Marca
        this.sistemaOperacional = sistemaOperacional
        this.fabricante = fabricante
    }
    mostrarinfo(){
        console.log (`A marca: ${this.Marca}
        O sistema Operacional: ${this.sistemaOperacional}
        O fabricante: ${this.fabricante}`)
    }
}