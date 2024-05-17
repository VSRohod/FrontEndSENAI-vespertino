var valorTotal = 0;

function adicionarAoCarrinho(produto,valor){
    // && - e (as duas condições deverão ser verdadeiras)
    // || - ou (basta uma condição ser verdadeira para que o bloco seja executado)
    // =  atribuição
    // ==  comparação de conteudo
    // === comparação de conteudo e tipo
    if(produto == '' || valor <= 0){
        alert("Opção inválida ou não funciona!");
    }else{
        valorTotal += valor;
        alert(`O produto : ${produto} foi adicionado!`);
        totalCarrinho();
    }  
}

function totalCarrinho(){
    alert(`Total da compra $: ${valorTotal}`);
}