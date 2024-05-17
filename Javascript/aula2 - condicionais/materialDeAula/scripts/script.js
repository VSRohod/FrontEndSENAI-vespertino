function seSenao() {
    // se (condição) faça, fimse / se (condição) senao
    if(false){
        console.log("Estou no If");
    }else{
        console.log("Estou no Else");
    }

    var idade = Number(prompt("Digite a sua idade:"));
    console.log(idade);

    if(idade >= 18){
        alert("Seja bem vindo!");
    }else{
        location.href = "https://www.google.com.br"
    }
}

function caso(){
    let escolha = prompt("Escolha uma opção de A a D");

    //ESCOLHA(VAR) CASO..
    // default = caso seja nenhum dos solicitados
    switch(escolha){
        case "A":
            alert("Você escolheu A");
            break
        case "B":
            alert("Você escolheu B");
            break
        case "C":
            alert("Você escolheu C");
            break
        case "D":
            alert("Você escolheu D");
            break
        default:
            alert("O operador é inválido")
    }

}

function teste(){

}