var usuario = ''
var senha = ''

// document.getElementById("logarUsuario");
var btnLogar = document.querySelector("#logarUsuario");

// addEventListener = Adiciona um evento, qual função a ser rodada
// Obs : A única excessão do código que não precisa de parenteses na hora de chamar a function
btnLogar.addEventListener('click',fazerLogin);

function fazerLogin(){
    usuario = document.querySelector("#usuario").value;
    senha = document.querySelector("#senha").value;
    
    document.querySelector("#usuarioStatus").innerHTML = `
        Seja bem vindo(a), ${usuario}
    `
}

// catalogo
var catalogo = ["Placa de Video","Placa Mãe","Processador","Memória ram","Fonte","Monitor"]

catalogo.forEach(element => {
    document.querySelector("main").innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body flex-column d-flex align-items-center">
            <h5 class="card-title">${element}</h5>
            <button onclick="adicionarCarrinho('${element}')" class="btn btn-primary">Comprar</button>
        </div>
    </div>   
    `
});

var carrinho = [];

function adicionarCarrinho(produto){
    document.querySelector("#respostaCarrinho").innerHTML = ""
    carrinho.push(produto);
    alert(`O produto : ${produto} foi adicionado com sucesso!`);
    carrinho.forEach(element => {
        document.querySelector("#respostaCarrinho").innerHTML += `<h5> ${element} </h5>`
    });
}