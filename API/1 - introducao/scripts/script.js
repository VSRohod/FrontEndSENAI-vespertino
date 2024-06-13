document.querySelector("#cep").addEventListener("focusout", buscaCep );

function buscaCep(){
    let cep = document.querySelector("#cep").value;

    if(cep.length !== 8){
        alert("Digite um cep válido, um cep com 8 digitos!");
    }else{
        // fetch = busca a api
        // then((response)) = roda a resposta do servidor esperando que tudo esteja okay!
        // then((dados)) = roda a api e nos lista os dados
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
            return response.json();
        }).then((dados) => {
            document.querySelector("#logradouro").value = dados.logradouro;
            document.querySelector("#complemento").value = dados.complemento;
            document.querySelector("#bairro").value = dados.bairro;
            document.querySelector("#localidade").value = dados.localidade;
        })
    }
}