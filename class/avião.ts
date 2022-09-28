export class avião {
    marca: string
    tamanho: number
    cor: string

    constructor(
        marca: string,
        tamanho: number,
        cor: string
    ) {
        this.marca = marca
        this.tamanho = tamanho
        this.cor = cor
    }
    verMarca() {
        console.log(`a marca do avião é ${this.marca}
        o tamanho do avião é ${this.tamanho}
        a cor é: ${this.cor}`)
    }
}