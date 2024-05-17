// escreval()
// console.log = retorna valores no terminal/console
console.log("Olá mundo!");

// caixas de texto
// alert = imprime um alerta na página
// alert("Olá!");
// prompt = imprimindo uma mensagem e espera o usuario digitar algo
// prompt("Qual é seu nome?");
// prompt = imprimindo uma mensagem e espera o usuario escolher sim ou não
// confirm("Deseja baixar novamente?");

// var = variavel escopo global e sobrescrevivel
var varTeste = 0
varTeste = 10

// tipos de dados (teste de dados = typeOf)
// varTeste = 5 - number
// varTeste = "teste" - string
// varTeste = true - boolean
// varTeste = [] - object

// const = variavel escopo global e não sobrescrevivel
const constTeste = 0 
// constTeste = 5

// let = variavel de escopo local e sobrevivels
function teste(){
    let letTeste = 0
}

letTeste = 1;

console.log(varTeste);
console.log(constTeste);
console.log(letTeste);

// parseFloat = converte para real
// parseInt = converte para inteiro
// Number = converte para número (tanto real, tanto inteiro)

// function = procedimento ou bloco de codigos que serão chamados para serem executados

function nome(){
    var nome = prompt('Qual é seu nome?');
    alert("Seja bem vindo "+nome+" Aproveite a estadia!");
    alert(`Seja bem vindo ${nome} Aproveite a estadia!`);
}

function somar(){
    var numero1 = parseFloat(prompt("Qual é o primeiro número?"));
    var numero2 = Number(prompt("Qual é o segundo número"));
    
    var resultado = numero1 + numero2
    alert(resultado)
}

// parametro = são identificadores dos valores passados dentro do parenteses
function produto(valor,nome){
    alert(`Este produto vale : ${valor}`);
    alert(`O nome do produto : ${nome}`);
}