// array filmes
// filme = 0:titulo, 1:descricao
var filmes = [
    ["Harry Potter","Um jovem bruxo"],
    ["Shrek","Um ogro e sua princesa"],
    ["Poderoso chefão","Filme mafioso"],
    ["Star Wars","Guerra nas estrelas"],
    ["Senhor dos anéis","Uma jornada de Hobbits"],
    ["Vingadores","Os herois mais poderosos da terra"],
    ["Tenet","Ficção cientifica"]
]

var grupoFilmes = document.getElementById("grupoFilmes");

filmes.forEach(element => {
    grupoFilmes.innerHTML += `
    <div class="filme">
        <h5>${element[0]}</h5>
        <p>${element[1]}</p>
        <button class="verMais">Ver Mais</button>
    </div>
`
});




