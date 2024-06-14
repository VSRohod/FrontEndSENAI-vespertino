// VARIAVEIS
const apiKey = "03cf15ab19e5ce41820f2847bb413159";
const btnClima = document.querySelector("#btnClima");
const inputCidade = document.querySelector("#cidade");
const climaResultado = document.querySelector("#climaResultado");
var cidade = ""

// FUNCTIONS
// async + await = importante acrescentar para que ele aguarde alguns processos que podem demorars
const apiClima = async(cidade) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`

    const response =await fetch(apiURL);
    const dados =await response.json();

    return dados;
}

const mostrarClima = async(cidade) => {
    const dados = await apiClima(cidade);

    climaResultado.innerHTML = `
        <h3 class="m-3" id="nomeCidade">Cidade : <i class="bi bi-pin-map-fill"></i> ${dados.name} </h3>
        <p class="m-3" id="temperaturaCidade">Temperatura Atual : <i class="bi bi-thermometer-half"></i> ${dados.main.temp} º </p>
        <p class="m-3" id="umidadeCidade">Umidade do ar : <i class="bi bi-droplet-fill"></i> ${dados.main.humidity} % </p>
        <p class="m-3" id="velocidadeVentoCidade">Velocidade dos Ventos : <i class="bi bi-wind"></i> ${dados.wind.speed} km/h </p>
    `
}

// EVENTOS
btnClima.addEventListener("click", () => {
    cidade = inputCidade.value;
    mostrarClima(cidade)
})