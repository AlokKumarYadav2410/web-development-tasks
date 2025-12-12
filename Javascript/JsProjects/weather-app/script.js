let formElement = document.querySelector("form");
let degreeElement = document.querySelector(".main-result .search-img p");
let cityElement = document.querySelector(".main-result .data .city-data p");
let timeElement = document.querySelectorAll(".main-result .data .time-data p");

let loaderElement = document.querySelector(".loader");
let closeBtn = document.querySelector(".close-btn");
let errorMessageElement = document.querySelector(".error-message");
let errorMessageModal = document.querySelector(".error-message-modal");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputElement = document.querySelector("#search-box");
    let cityName = inputElement.value;
    console.log("City Name:", cityName);
    fetchWeatherData(cityName);

});


closeBtn.addEventListener("click", () => {
    errorMessageElement.style.display = "none";
    errorMessageModal.style.display = "none";
});
async function fetchWeatherData(city) {
    let geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
    loaderElement.style.display = "flex";
    try {
        let geoResponse = await fetch(geoURL);
        let geoData = await geoResponse.json();
           if (!geoData.results || geoData.results.length === 0) {
            console.log("City not found");
            loaderElement.style.display = "none";
            errorMessageElement.style.display = "flex"; // Show modal
            errorMessageModal.style.display = "flex";
            return;
        }
        console.log("Geocoding Data:", geoData);
        let { latitude, longitude, name, country } = geoData.results[0];

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        console.log("City:", name);
        console.log("Country:", country);

        let weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto`;

        let weatherRes = await fetch(weatherURL);
        let weatherData = await weatherRes.json();

        degreeElement.textContent = `${weatherData.current_weather.temperature}°C`;
        cityElement.textContent = `${name}, ${country}`;
        let timeString = weatherData.current_weather.time;
        let [date, time] = timeString.split("T");
        timeElement[0].textContent = `${date}`;
        timeElement[1].textContent = `${time}`;
        loaderElement.style.display = "none";
        console.log("Weather Data:", weatherData);

    }
    catch (error) {
        console.error("Error fetching data:", error);
        errorMessageElement.style.display = "flex";
        errorMessageModal.style.display = "flex";
    }
    finally {
        loaderElement.style.display = "none";
    }
}


