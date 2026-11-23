const url = 
"https://api.open-meteo.com/v1/forecast?latitude=35.22709&longitude=-80.84313&hourly=temperature_2m,wind_speed_10m&current=temperature_2m" + "&temperature_unit=fahrenheit";

const button =document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    /*Display Temperature on Homepage */
    const temp = document.createElement("p");
    temp.className = "fs-4";
    temp.textContent = "Temperature: " + data.current.temperature_2m + data.current_units.temperature_2m;
    
    weatherArea.appendChild(temp);

    /*Display wind speed on Homepage */
     const wind = document.createElement("p");
    wind.className = "fs-4";
    wind.textContent = "Wind Speed: " + data.hourly_units.wind_speed_10m + " " + data.hourly_units.wind_speed_10m;
    
    weatherArea.appendChild(wind);
    
    /*Display Time on Homepage */
    const time = document.createElement("p");
    time.className = "fs-4";
    time.textContent = "Date & Time:  " + " " + data.current.time;

    weatherArea.appendChild(time);
}

button.addEventListener("click", getWeather);