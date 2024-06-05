// catalogo
var catalogo = []

catalogo.push(new ProdutoTurismo("Japão","Visite a terra do sol nascente!",["Metro","Carro","Bicicleta"],3,10000,"https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"));
catalogo.push(new ProdutoTurismo("México","Visite o méxico!",["Carro","Bicicleta","Coiote"],5,300,"https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"));
catalogo.push(new ProdutoTurismo("Brasil","Visite o brasil",["Cavalo","Carro","Moto"],7,1000,"https://plus.unsplash.com/premium_photo-1679957335673-720b2dfe28b7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"));

catalogo.forEach((elemento) => {
    document.querySelector("#catalogo").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${elemento.img}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">${elemento.nome}</h5>
                <p class="card-text">${elemento.descricaoLocal}</p>
                <h5 class="text-success">R$ ${elemento.valor}</h5>
                <button class="btn btn-dark">COMPRAR</button>
            </div>
        </div>
    `
})

// tema
$("#btnTema").on("click",function(){
    if( $("body").attr("data-bs-theme") == "light" ){
        $("body").attr("data-bs-theme","dark");
    }else{
        $("body").attr("data-bs-theme","light");
    }
})

// valor
var valor = 0;

