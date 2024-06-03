// promisses
// Promisse é uma promessa, onde podemos cumprir com o esperado, ou quebrar a promessa de um resultado esperado
// resolve = o programa rodou dentro dos padrões
// reject = algo saiu do esperado!
// reject(reason), reason = o motivo daquela promessa ter sido quebrada
var promessa = new Promise((resolve,reject) => {
    let nome = "Leo";
    console.log("---Promise---")

    if(nome == "Victor"){
        resolve("O usuario foi encontrado!")
    }else{
        reject("O usuario não é o Victor")
    }
})

// promessa.então(faça => {algo} )
// then = roda o programa esperando resultados programados
promessa.then((resultado) => {
    console.log(resultado)
})

// promessa.então(faça => {algo esperando um erro})
// catch = roda o programa esperando todos os resultados não esperados (erros,rejects)
promessa.catch((resultado) => {
    console.log(resultado)
})


function codigoDemorado(){
    return new Promise((resolve) => {
        // setTimeOut = define um cronometro antes de rodar o bloco de código
        // coloqueUmTempo (faca {algo},emQuantoTempo) obs: A contagem é feita em milisegundos
        setTimeout(() => {
            console.log("Enrolei")
            resolve()
        },3000)
    })
}

// assincrono = le o codigo em ordem, porem se uma linha demora, ele ignora ou roda após a ordem correta
// sincrono (async) = le o codigo em ordem, porem ele tem a capacidade de esperar um processo acontecer para poder continuar a sua leitura
async function carregando(){
    console.log("Comecei")
    // await = aguarde um processo ser concluido, antes de continuar a leitura do código
    await codigoDemorado()
    console.log("Terminei")
}

carregando()
