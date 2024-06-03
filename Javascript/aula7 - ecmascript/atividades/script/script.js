// EXERCÍCIO 1
// Uma função onde possa estar habilitando a pessoa de digitar um texto, e logo após utilizar as funções de replace e replaceAll
// INPUT = Nada
// OUTPUT = TextArea Texto, Input do termo removido, input do Termo adicionado
var corpo = document.querySelector("body");

function replaceEx(){
    corpo.innerHTML += `
    <div style="display : flex" id="ex1">
        <textarea cols="15" id="textoDigitado"></textarea>
        <input type="text" id="termoRemover" placeholder="O termo que deseja remover">
        <input type="text" id="termoAdicionado" placeholder="O termo que deseja adicionar">
        <button type="button" onclick="substituir()" id="substituir">SUBSTITUIR</button>
        <button type="button" onclick="substituirTudo()" id="substituirTudo">SUBSTITUIR TUDO</button>
    </div>
    `
}

// substituir e substituirTudo = função para atualizar um texto digitado pelo usuário
// INPUT = textoDigitado , TermoRemover, TermoAdicionado
// OUTPUT = TEXTO ATUALIZADO
function substituir(){
    let textoDigitado = document.querySelector("#textoDigitado").value;
    let termoRemover = document.querySelector("#termoRemover").value;
    let termoAdicionado = document.querySelector("#termoAdicionado").value;

    let textoAtualizado = textoDigitado.replace(termoRemover,termoAdicionado);
    
    document.querySelector("#textoDigitado").value = textoAtualizado;
}

function substituirTudo(){
    let textoDigitado = document.querySelector("#textoDigitado").value;
    let termoRemover = document.querySelector("#termoRemover").value;
    let termoAdicionado = document.querySelector("#termoAdicionado").value;

    let textoAtualizado = textoDigitado.replaceAll(termoRemover,termoAdicionado);
    
    document.querySelector("#textoDigitado").value = textoAtualizado;
}

replaceEx();

// EXERCÍCIO 2
// Função para verificar se o usuário é adm
// INPUT : nome , senha
// OUTPUT : Mensagem de verifição no console
function promiseEx(){
    new Promise((resolve,reject) => {
        let usuarioSalvo = "ADM";
        let senhaSalvo = "ADM";

        let usuario = prompt("Digite o seu usuario");
        let senha = prompt("Digite a sua senha");

        if(usuario == usuarioSalvo & senha == senhaSalvo){
            alert("Usuário foi identificado! Pode entrar");
            resolve()
        }else{
            alert("Usuário ou senha incorretos, Digite novamente");
            reject("Usuario ou senha não batem com o esperado")
        }
    })
}

// EXERCÍCIO 3
// Input de pesquisa para buscar um elemento dentro do array, caso exista imprimir na tela a mensagem que foi encontrado, caso contrário, imprimir na tela que o elemento não existe na listagem
// INPUT : elemento
// OUTPUT : Mensagem da verificação
corpo.innerHTML += `
<input id="pesquisa" placeholder="Digite um termo a ser pesquisado" onfocusout="pesquisarEx()" type="text" >
`

function pesquisarEx(){
    let listaElementos = ["God Of War","Computador","Vingadores"]

    let pesquisa = document.querySelector("#pesquisa").value

    let Achou = listaElementos.includes(pesquisa)
    
    if(Achou == true){
        alert("Elemento encontrado!")
    }else{
        alert("Elemento não encontrado!")
    }

}