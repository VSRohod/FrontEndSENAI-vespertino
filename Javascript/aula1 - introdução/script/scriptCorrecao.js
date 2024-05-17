// o function Exercicio1, ele tem como função coletar quantos clientes e quanto que a mesa gastou, e fazer com que esse valor seja distribuido de forma igual
// INPUT = quantidadeClientes, valorTotalMesa
// OUTPUT = valorDivido
function Exercicio1(){
    let qntClientes = Number(prompt("Insira a quantidade de clientes na mesa :"));
    let valorTotalMesa = Number(prompt("Insira qual foi o valor total da mesa R$:"));

    let valorDivido = valorTotalMesa/qntClientes;

    alert(`O valor para cada cliente será de R$: ${valorDivido.toFixed(2)}`);
    // alert(`O valor para cada cliente será de R$: ${(valorTotalMesa/qntClientes).toFixed(2)}`);
}

// o function Exercicio2 , ele tem como função coletar um número, e logo em seguida demonstrar,em ordem, antecessor, o número em si, e seu sucessor.
// INPUT : numero
// OUTPUT : antecessor,numero,sucessor
var numero
const numeroOperacao = 1
function Exercicio2(){
    numero = Number(prompt("Digite o número desejado!"));
    
    let antecessor = numero - numeroOperacao;
    let sucessor = numero + numeroOperacao;

    alert(`O antecessor é : ${antecessor},O número escolhido é : ${numero}, e o sucessor : ${sucessor}`)
}