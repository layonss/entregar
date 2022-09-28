export class Patinete{

    marca: string;
    cor: string;
    faixaetária: string;


constructor(
    marca: string,
    cor: string,
    faixaetária: string,

){
    this.marca = marca;
    this.cor = cor;
    this.faixaetária = faixaetária;
}
verInfos(){
    console.log(`Informações do Patinete
    \nMarca: ${this.marca}
    \nCor: ${this.cor}
    \nFaixa etária: ${this.faixaetária}`)

}}