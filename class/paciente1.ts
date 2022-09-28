export class Paciente{

    Nome: string;
    Idade: number;
    DataChecagem: string;
    DataInternação: string;
    peso: number;
    altura: number;

constructor(

    Nome: string,
    Idade: number,
    DataChecagem: string,
    DataInternação: string,
    peso: number,
    altura: number,


){
    this.Nome = Nome
    this.Idade = Idade
    this.DataChecagem = DataChecagem
    this.DataInternação = DataInternação
    this.peso = peso
    this.altura = altura
}
    verDados(){
        console.log(`CHECK IN PACIENTE
        Nome: ${this.Nome}
        Idade: ${this.Idade}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Data de checagem: ${this.DataChecagem}
        Data de Internação: ${this.DataInternação}`)
    }}