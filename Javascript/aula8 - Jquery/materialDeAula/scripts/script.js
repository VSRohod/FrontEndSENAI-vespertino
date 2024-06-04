var paragrafoPrincipalMetodoAntigo = document.querySelector("#paragrafoPrincipal")
// $() = nova seleção do jquery, equivale a document.querySelector
// .text() = se vazio, lista  o texto dentro do elemento, se preenchido, atualiza o valor com o que foi colocado entre parenteses
var pPrincipal = $("#paragrafoPrincipal").text("olha que top!")
// alert(pPrincipal)

// Jquery trabalha também com visual, logo todo e qualquer erro será ocultado do usuário (Boas práticas)
var nomeUsuario = undefined;

$("#nomeUsuario").text(nomeUsuario)

// evento
// on = addEventListener
// Vantagem = Declaramos as 3 etapas de evento simultaneamente (selecionar,adicionar evento,função)
pPrincipal.on("click", function(){
    pPrincipal.addClass("mudei");
})

$("h6").on("click",function(){
    // addClass = adiciona classe
    $("main").addClass("tema-escuro");
    // removeClass = remove classe
    $("main").removeClass("tema-claro");
    // css = adiciona ou atualiza, um atributo no elemento
    // obs css(atributo,valor)
    $("h3").css("color","red");
})

$("#fechar").on("click",function(){
    // efeitos do jquery
    // EFEITOS PARA SUMIR
    // $("#propaganda").fadeOut(500)
    // $("#propaganda").slideUp(500)
    $("#propaganda").hide(2000)
    
    // EFEITOS PARA APARECER
    // $("#propaganda").fadeIn(2000)
    // $("#propaganda").slideDown(2000)
    $("#propaganda").show(2000)
})


