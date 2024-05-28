// var cliente1Nome = "Leo";
// var cliente1Conta = 1;
// var cliente1Saldo = 400;
// var cliente1Pagamentos = ["Pix","Crédito"];
// var cliente1Cpf = 99999999;
// var cliente1Rg = 88888;

// var cliente1 = ["nome","conta","pagamentos"]
// POO (PROGRAMAÇÃO ORIENTADA A OBJETO)
// class = é um molde de objeto
class Cliente {
    // atributo / propriedade = são caracteristicas do objeto 
    nome;
    conta;
    saldo = 0;
    pagamentos;
    cpf;
    rg;
    dataDeNascimento;
    // metodo = metodo é uma ação feita pelo objeto
    sacar(valor){
        this.saldo -= valor
        // return = retorna um valor assim que o metodo for chamado
        return `O valor de R$ ${valor} foi sacado com sucesso!`
    }
    depositar(valor){
        this.saldo += valor
        return `O valor de R$ ${valor} foi depositado com sucesso!`
    }
}
// new ClassNome = Um novo objeto baseado pelo molde, o class
var cliente1 = new Cliente;
cliente1.nome = "Leo";
cliente1.conta = 1;
cliente1.pagamentos = ["Pix","Débito"];
cliente1.cpf = 999999;
cliente1.rg = 888888;
cliente1.dataDeNascimento = "13/02/2001";


var cliente2 = new Cliente;