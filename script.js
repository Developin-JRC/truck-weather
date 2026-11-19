const url = 
https://geocoding-api.open-meteo.com/v1/search?name=Charlotte&count=1;
const button =document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    /*/Temp
    const temp = document.createElement("p");
    temp.textContent = "Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;
    weatherArea.appendChild(temp); */
}

button.addEventListener("click", getWeather);