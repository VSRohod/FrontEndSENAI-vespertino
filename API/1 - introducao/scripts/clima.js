const apiKey = "446e9bc83b0d0fc72c71fccc8adc7548";
const cidadeInput = document.querySelector("#cidadeInput");
var cidade = "";

const cidadeNome = document.querySelector("#cidadeNome");
const cidadeTemperatura = document.querySelector("#cidadeTemperatura");
const cidadeUmidade = document.querySelector("#cidadeUmidade");
const cidadeVentos = document.querySelector("#cidadeVentos");

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data
}

const showWeatherData = async (city) => {

    const data = await getWeatherData(city);

    cidadeNome.innerText = data.name;
    cidadeTemperatura.innerText = data.main.temp+"º";
    cidadeUmidade.innerText = data.main.humidity+"%";
    cidadeVentos.innerText = data.wind.speed+"km/h";
}

cidadeInput.addEventListener("focusout", () => {
    cidade = cidadeInput.value;
    showWeatherData(cidade)
});
