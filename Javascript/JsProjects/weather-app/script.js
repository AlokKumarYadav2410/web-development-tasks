let main = document.querySelector("main");
let formElement = document.querySelector("form");
let degreeElement = document.querySelector("#degree");
let feelsElement = document.querySelector("#feels");
let weatherIconElement = document.querySelector(".main-result .search-img img");
let cityElement = document.querySelector(".main-result .data .city-data p");
let timeElement = document.querySelectorAll(".main-result .data .time-data p");

let loaderElement = document.querySelector(".loader");
let closeBtn = document.querySelector(".close-btn");
let errorMessageElement = document.querySelector(".error-message");
let errorMessageModal = document.querySelector(".error-message-modal");
let errorMessageText = document.querySelector(".error-message p");

let weatherDetails = document.createElement("div");
// 7-day Forecast
let sevenForecast = document.createElement("div");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputElement = document.querySelector("#search-box");
    let cityName = inputElement.value;
    sevenForecast.style.display = "none";
    weatherDetails.style.display = "none";
    if (cityName.trim() === "") {
        errorMessageText.textContent = "Please enter a city name.";
        errorMessageElement.style.display = "flex";
        errorMessageModal.style.display = "flex";
        return;
    }
    fetchWeatherData(cityName);

});

closeBtn.addEventListener("click", () => {
    errorMessageElement.style.display = "none";
    errorMessageModal.style.display = "none";
});

// Weather icons mapping
const weatherIcons = {
    0: { day: "https://img.icons8.com/emoji/96/sun-emoji.png", night: "https://img.icons8.com/emoji/96/full-moon-emoji.png" },
    1: { day: "https://img.icons8.com/emoji/96/sun-behind-cloud.png", night: "https://img.icons8.com/?size=100&id=VT8HlhlnhUwL&format=png&color=000000" },
    2: { day: "https://img.icons8.com/?size=100&id=zIVmoh4T8wh7&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=VT8HlhlnhUwL&format=png&color=000000" },
    3: { day: "https://img.icons8.com/?size=100&id=W8fUZZSmXssu&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=W8fUZZSmXssu&format=png&color=000000" },
    45: { day: "https://img.icons8.com/?size=100&id=7tEHHH5dn7A3&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=7tEHHH5dn7A3&format=png&color=000000" },
    48: { day: "https://img.icons8.com/?size=100&id=7tEHHH5dn7A3&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=7tEHHH5dn7A3&format=png&color=000000" },
    51: { day: "https://img.icons8.com/?size=100&id=QZJFPE7TNi5Q&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=QZJFPE7TNi5Q&format=png&color=000000" },
    53: { day: "https://img.icons8.com/?size=100&id=QZJFPE7TNi5Q&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=QZJFPE7TNi5Q&format=png&color=000000" },
    55: { day: "https://img.icons8.com/?size=100&id=QZJFPE7TNi5Q&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=QZJFPE7TNi5Q&format=png&color=000000" },
    61: { day: "https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png&color=000000" },
    63: { day: "https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png&color=000000" },
    65: { day: "https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png&color=000000" },
    71: { day: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000" },
    73: { day: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000" },
    75: { day: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000" },
    77: { day: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000" },
    80: { day: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png&color=000000" },
    81: { day: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png&color=000000" },
    95: { day: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png&color=000000", night: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png&color=000000" }
};


async function fetchWeatherData(city) {
    let geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&country=IN`;
    loaderElement.style.display = "flex";
    try {
        sevenForecast.innerHTML = "";
        let geoResponse = await fetch(geoURL);
        let geoData = await geoResponse.json();
        if (!geoData.results || geoData.results.length === 0) {
            loaderElement.style.display = "none";
            errorMessageElement.style.display = "flex";
            errorMessageModal.style.display = "flex";
            return;
        }
        let { latitude, longitude, name, country, timezone } = geoData.results[0];

        let weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=${timezone}`;

        let weatherRes = await fetch(weatherURL);
        let weatherData = await weatherRes.json();

        const currentTime = new Date(weatherData.current_weather.time);
        const sunriseTime = new Date(weatherData.daily.sunrise[0]);
        const sunsetTime = new Date(weatherData.daily.sunset[0]);
        const isDay = currentTime >= sunriseTime && currentTime < sunsetTime;
        const code = weatherData.current_weather.weathercode;
        weatherIconElement.src = isDay ? weatherIcons[code].day : weatherIcons[code].night;
        degreeElement.textContent = `${weatherData.current_weather.temperature}°C`;
        feelsElement.textContent = `Feels like ${weatherData.hourly.apparent_temperature[0]}°C`;
        cityElement.textContent = `${name}, ${country}`;
        let timeString = weatherData.current_weather.time;
        let [date, time] = timeString.split("T");
        timeElement[0].textContent = `${date.split("-").reverse().join("/")}`;
        timeElement[1].textContent = `${(time.split(":")[0]>12)?(time.split(":")[0]-12).toString().padStart(2,'0'):time.split(":")[0]}:${time.split(":")[1]} ${time.split(":")[0]>=12?'PM':'AM'}`;

        weatherDetails.style.display = "grid";
        weatherDetails.classList.add("weather-details")
        weatherDetails.innerHTML = `<h2>Today's Highlights</h2>
            <div class="weather-detail">
                <div class="details">
                    <p>Humidity</p>
                    <p id="humidity">${weatherData.hourly.relativehumidity_2m[0]}%</p>
                </div>
                <div class="details">
                    <p>Wind</p>
                    <p id="wind">${weatherData.current_weather.windspeed} km/h</p>
                </div>
                    <div class="details">
                        <p>UV Index</p>
                        <p id="uv-index">${weatherData.daily.uv_index_max[0]}</p>
                    </div>
                    <div class="details">
                        <p>Visibility</p>
                        <p id="visibility">${(weatherData.hourly.visibility[0] / 1000).toFixed(2)} km</p>
                    </div>
                    <div class="details">
                        <p>Sunrise</p>
                        <p id="sunrise">${weatherData.daily.sunrise[0].split("T")[1]}</p>
                    </div>
                    <div class="details">
                        <p>Sunset</p>
                        <p id="sunset">${weatherData.daily.sunset[0].split("T")[1]}</p>
                </div>
            </div>`;

        document.querySelector(".weather-app").appendChild(weatherDetails);

        sevenForecast.style.display = "flex";
        sevenForecast.classList.add("seven-forecast")
        let h2 = document.createElement("h2");
        h2.textContent = "7 Days Forecast";
        sevenForecast.appendChild(h2);
        
        let forecasts = document.createElement("div");
        forecasts.classList.add("forecasts");

        for (let i = 0; i < 7; i++) {
            const dateStr = weatherData.daily.time[i];
            const dateObj = new Date(dateStr);
            const weekday = dateObj.toLocaleDateString("en-US", { weekday: "short" });
            const dateFormatted = dateObj.toLocaleDateString("en-GB");

            const maxTemp = weatherData.daily.temperature_2m_max[i];
            const minTemp = weatherData.daily.temperature_2m_min[i];
            const code = weatherData.daily.weathercode[i];

            const forecastDate = new Date(dateStr + "T12:00");
            const isDayForecast = forecastDate >= new Date(weatherData.daily.sunrise[i]) && forecastDate < new Date(weatherData.daily.sunset[i]);
            const iconURL = isDayForecast ? weatherIcons[code].day : weatherIcons[code].night;

            const tile = document.createElement("div");
            tile.classList.add("weather-forecast-tile");
            tile.innerHTML = `
                <div class="inner-forecast-tile">
                    <p>${weekday}</p>
                    <img src="${iconURL}" alt="">
                </div>
                <p>${dateFormatted}</p>
                <p>${maxTemp}°C / ${minTemp}°C</p>
            `;
            forecasts.appendChild(tile);
        }
        sevenForecast.appendChild(forecasts);
        main.appendChild(sevenForecast)
        localStorage.setItem("lastCity", city);
        loaderElement.style.display = "none";
    }
    catch (error) {
        errorMessageText.textContent = "Please enter a valid city name.";
        errorMessageElement.style.display = "flex";
        errorMessageModal.style.display = "flex";
    }
    finally {
        loaderElement.style.display = "none";
    }
}

function initWeather() {
    const lastCity = localStorage.getItem("lastCity") || "Delhi";
    fetchWeatherData(lastCity);
}

window.addEventListener("DOMContentLoaded", initWeather);