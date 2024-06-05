class ProdutoTurismo {
    constructor (nome,descricaoLocal,tiposLocomocao,diasPacote,valor,img){
        this.nome = nome,
        this.descricaoLocal = descricaoLocal,
        this.tiposLocomocao = tiposLocomocao,
        this.diasPacote = diasPacote,
        this.valor = valor,
        this.img = img
    }
}

var teste = new ProdutoTurismo("NomeLocal","desc",["carro"],5,100,"src")
