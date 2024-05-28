class ClienteVip {
    // contructor = recebe os valores e atribui nos atributos
    constructor(nomeP,cpfP,pagamentosP){
        // obs = _atributo -> significa que o valor não pode ser alterado manualmente, apenas metodos poderão altera-lo 
        this._nome = nomeP;
        this.saldo = 0;
        this.cpf = cpfP;
        this.pagamentos = pagamentosP;
    }
    sacar(valor){
        if(this.saldo < valor){
            return `Operação não autorizada!`
        }else{
            this.saldo -= valor
            return `O saque do valor R$ ${valor} foi efetuado com sucesso!`
        }
    }
    depositar(valor){
        if(valor <= 0){
            return `Operação não autorizada!`
        }else{
            this.saldo += valor
            return `O deposito do valor R$ ${valor} foi efetuado com sucesso!`
        }
    }
    verificarSaldo(){
        return this.saldo
    }
}
// quando trabalhado com contructor podemos passar os valores dentro dos parenteses ao invés de passar linha por linha (metodo padrão)
var vip1 = new ClienteVip("Davinci",999999,["Pix"])
var vip2 = new ClienteVip("Alessandra",8888888,["Pix","Cartão"])