document.querySelector("#cadastrarBtn").addEventListener("click", cadastrarCarro)

var carro

function listarCarro(){
    document.querySelector("#principal").innerHTML = `
    <div id="carro" class="${carro.cor}">
        <div id="janelas">
            <div class="janela"></div>
        </div>
        <div id="rodas">
            <div class="roda"></div>
            <div class="roda"></div>
        </div>
    </div>
    <h3> Marca do carro : ${carro.marca} </h3>
    <h3> Modelo do carro : ${carro.modelo} </h3>
    <h3> Velocidade máxima do carro : ${carro.velMax} </h3>
    <h3> Velocidade atual do carro : ${carro.velAtual} </h3>
    <input onfocusout="acelerar()" type="number" id="acelerar" min="0" max="${carro.velMax}"placeholder="Insira um valor para acelerar" >

    ` 
}

function cadastrarCarro(){
    let marca = document.querySelector("#marca").value
    let modelo = document.querySelector("#modelo").value
    let cor = document.querySelector("#cor").value
    let velMax = Number(document.querySelector("#velMax").value)

    carro = new Carro(marca,modelo,cor,velMax);
    
    listarCarro()
}

function acelerar(){
    let acelerar = Number(document.querySelector("#acelerar").value)

    carro.acelerar(acelerar);
    
    listarCarro()
}