var calcularBtn = document.querySelector("#calcular");

calcularBtn.addEventListener("click", calcular)

function calcular(){
    // coletar valores 
    var empregado = document.querySelector("#empregado").value
    var filho = document.querySelector("#filho").value
    var salario = document.querySelector("#salario").value

    // verificar os valores
    let cota = 0

    if(salario > 0 & salario <= 806.80){
        cota = 41.37 * filho
    }else if(salario >= 806.81 & salario <= 1212.64) {
        cota = 29.16 * filho
    }else if(salario > 1212.64){
        cota = 0
    }else{
        alert("Dados ou informações incorretas! Tente novamente")
    }

    // retornar a cota do salario familia
    alert(`O empregado : ${empregado}, terá de cota família : R$ ${cota.toFixed(2)}`)

}



