export class cliente{
    nome: string;
    idade: number;
    cpf: string; 
    telefone: string
    ligar: any;

    constructor (
    nome: string,
    idade: number,
    cpf: string,
    telefone: string
    ){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.telefone = telefone
    }
    verTelefone(){
        console.log(`Seu nome é: ${this.nome}
        Sua idade: ${this.idade}
        Seu CPF é: ${this.cpf}
        Seu número é: ${this.telefone}`
        )
    }
}