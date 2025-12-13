const main = document.querySelector("main");
const formElement = document.querySelector("form");

const degreeElement = document.querySelector("#degree");
const feelsElement = document.querySelector("#feels");
const weatherIconElement = document.querySelector(".main-result .search-img img");
const cityElement = document.querySelector(".main-result .data .city-data p");
const timeElement = document.querySelectorAll(".main-result .data .time-data p");

const loaderElement = document.querySelector(".loader");
const closeBtn = document.querySelector(".close-btn");
const errorMessageElement = document.querySelector(".error-message");
const errorMessageModal = document.querySelector(".error-message-modal");
const errorMessageText = document.querySelector(".error-message p");

// WEATHER ICONS MAP
const weatherIcons = {
    0: { day: "https://img.icons8.com/emoji/96/sun-emoji.png", night: "https://img.icons8.com/emoji/96/full-moon-emoji.png" },
    1: { day: "https://img.icons8.com/emoji/96/sun-behind-cloud.png", night: "https://img.icons8.com/?size=100&id=VT8HlhlnhUwL&format=png" },
    2: { day: "https://img.icons8.com/?size=100&id=zIVmoh4T8wh7&format=png", night: "https://img.icons8.com/?size=100&id=VT8HlhlnhUwL&format=png" },
    3: { day: "https://img.icons8.com/?size=100&id=W8fUZZSmXssu&format=png", night: "https://img.icons8.com/?size=100&id=W8fUZZSmXssu&format=png" },
    45: { day: "https://img.icons8.com/?size=100&id=7tEHHH5dn7A3&format=png", night: "https://img.icons8.com/?size=100&id=7tEHHH5dn7A3&format=png" },
    48: { day: "https://img.icons8.com/?size=100&id=7tEHHH5dn7A3&format=png", night: "https://img.icons8.com/?size=100&id=7tEHHH5dn7A3&format=png" },
    51: { day: "https://img.icons8.com/?size=100&id=QZJFPE7TNi5Q&format=png", night: "https://img.icons8.com/?size=100&id=QZJFPE7TNi5Q&format=png" },
    61: { day: "https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png", night: "https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png" },
    71: { day: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png", night: "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png" },
    80: { day: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png", night: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png" },
    95: { day: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png", night: "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png" }
};

formElement.addEventListener("submit", e => {
    e.preventDefault();
    const city = document.querySelector("#search-box").value.trim();

    if (!city) {
        showError("Please enter a city name.");
        return;
    }

    fetchWeatherData(city);
});

closeBtn.addEventListener("click", hideError);

async function fetchWeatherData(city) {
    showLoader();

    try {
        const geoData = await fetchGeoData(city);
        const weatherData = await fetchWeather(geoData);

        renderCurrentWeather(geoData, weatherData);
        renderHighlights(weatherData);
        renderForecast(weatherData);

        localStorage.setItem("lastCity", city);
    } catch (error) {
        showError(error.message || "Something went wrong. Please try again.");
    } finally {
        hideLoader();
    }
}

async function fetchGeoData(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.results || !data.results.length) {
        throw new Error("City not found.");
    }

    return data.results[0];
}

async function fetchWeather({ latitude, longitude, timezone }) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=${timezone}`;

    const res = await fetch(url);
    return await res.json();
}

function renderCurrentWeather(geo, weather) {
    const currentTime = new Date(weather.current_weather.time);
    // const hourlyIndex = weather.hourly.time.indexOf(weather.current_weather.time);

    const sunrise = new Date(weather.daily.sunrise[0]);
    const sunset = new Date(weather.daily.sunset[0]);
    const isDay = currentTime >= sunrise && currentTime < sunset;

    const code = weather.current_weather.weathercode;
    const icon = weatherIcons[code] || weatherIcons[0];

    weatherIconElement.src = isDay ? icon.day : icon.night;
    degreeElement.textContent = `${weather.current_weather.temperature}°C`;
    feelsElement.textContent = `Feels like ${weather.hourly.apparent_temperature[0]}°C`;
    cityElement.textContent = `${geo.name}, ${geo.country}`;

    timeElement[0].textContent = currentTime.toLocaleDateString("en-GB");
    timeElement[1].textContent = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    });
}

function renderHighlights(weather) {
    document.querySelector(".weather-details")?.remove();

    const index = weather.hourly.time.indexOf(weather.current_weather.time);

    const details = document.createElement("div");
    details.className = "weather-details";
    details.innerHTML = `
        <h2>Today's Highlights</h2>
        <div class="weather-detail">
            <div class="details"><p>Humidity</p><p>${weather.hourly.relativehumidity_2m[0]}%</p></div>
            <div class="details"><p>Wind</p><p>${weather.current_weather.windspeed} km/h</p></div>
            <div class="details"><p>UV Index</p><p>${weather.daily.uv_index_max[0]}</p></div>
            <div class="details"><p>Visibility</p><p>${(weather.hourly.visibility[0] / 1000).toFixed(1)} km</p></div>
            <div class="details"><p>Sunrise</p><p>${weather.daily.sunrise[0].split("T")[1]}</p></div>
            <div class="details"><p>Sunset</p><p>${weather.daily.sunset[0].split("T")[1]}</p></div>
        </div>
    `;
    document.querySelector(".weather-app").appendChild(details);
}

function renderForecast(weather) {
    document.querySelector(".seven-forecast")?.remove();

    const container = document.createElement("div");
    container.className = "seven-forecast";

    const title = document.createElement("h2");
    title.textContent = "7 Days Forecast";
    container.appendChild(title);

    const forecasts = document.createElement("div");
    forecasts.className = "forecasts";

    for (let i = 0; i < 7; i++) {
        const date = new Date(weather.daily.time[i]);
        const code = weather.daily.weathercode[i];
        const icon = weatherIcons[code] || weatherIcons[0];

        const tile = document.createElement("div");
        tile.className = "weather-forecast-tile";
        tile.innerHTML = `
            <p>${date.toLocaleDateString("en-US", { weekday: "long" })}</p>
            <img src="${icon.day}">
            <p>${date.toLocaleDateString("en-GB")}</p>
            <p>${weather.daily.temperature_2m_max[i]}°C / ${weather.daily.temperature_2m_min[i]}°C</p>
        `;
        forecasts.appendChild(tile);
    }

    container.appendChild(forecasts);
    main.appendChild(container);
}

function showLoader() {
    loaderElement.style.display = "flex";
}

function hideLoader() {
    loaderElement.style.display = "none";
}

function showError(message) {
    errorMessageText.textContent = message;
    errorMessageElement.style.display = "flex";
    errorMessageModal.style.display = "flex";
}

function hideError() {
    errorMessageElement.style.display = "none";
    errorMessageModal.style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
    fetchWeatherData(localStorage.getItem("lastCity") || "Delhi");
});
