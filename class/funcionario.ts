export class funcionario{
    nome: string;
    idade: string;
    cod: number;
    
    constructor(
        nome:string,
        idade: string,
        cod: number
    ){
        this.nome = nome
        this.idade = idade
        this.cod = cod
    }
    crachá(){
        console.log (`Nome: ${this.nome}
        \nIdade: ${this.idade}
        \nCodigo do funcionário: ${this.cod}`)
    }
}