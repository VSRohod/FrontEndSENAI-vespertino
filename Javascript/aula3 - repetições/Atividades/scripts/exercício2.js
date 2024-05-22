const usuarioCadastrado = "ADM"
const senhaCadastrada = "ADM"

function repetirPergunta(){
    while(usuario !== usuarioCadastrado || senha !== senhaCadastrada){
        alert("Senha ou usuario incorretos!")
        usuario = prompt("Digite o seu usuario"); 
        senha = prompt("Digite sua senha"); 
    }
}

var usuario = prompt("Digite o seu usuário");
var senha = prompt("Digite a sua senha");
repetirPergunta();


alert("Seja bem vindo!");