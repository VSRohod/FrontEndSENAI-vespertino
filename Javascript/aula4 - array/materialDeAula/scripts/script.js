var filmes = ["Casa monstro"]
// metodo2 - alternativo
var jogos = Array();
jogos[0] = "Mario";
jogos[1] = "Bioshock";

// adiciona no ultima posição
filmes.push("Harry Potter");
// adiciona na primeira posição
filmes.unshift("Vingadores");
// remove na ultima posição
filmes.pop()
// remove na primeira posição
filmes.shift()

// EDITAR MEIO ARRAY
filmes.push("Power Rangers")
filmes.push("Atividade Paranormal")
filmes.push("Nova onda do imperador")
filmes.push("Planeta dos macacos")
// editar no meio do array
// splice (indice, quantos ele vai mexer, qual informação a ser addicionada) *indice/quantidade/conteudo
// deletando
filmes.splice(2,1)
// adicionando
filmes.splice(2,0,"Transformers")
// substituindo
filmes.splice(3,1,"Bob Esponja")














// imprimir na tela
var grupoFilmes = document.getElementById("grupoFilmes");

filmes.forEach(element => {
    grupoFilmes.innerHTML += `
    <div class="filme">
        <h5>${element}</h5>
        <button class="verMais">Ver Mais</button>
    </div>
`
});




