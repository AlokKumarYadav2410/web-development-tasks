let main = document.querySelector("main");
let contextMenu = document.querySelector(".context-menu");
let startMenu = document.querySelector(".start-menu");
let start = document.querySelector(".start");

let images = document.querySelectorAll("img");

images.forEach((img) => {
    img.setAttribute("draggable", "true");
    img.addEventListener("click", (e) => {
        if (startMenu === e.target || start === e.target) return;
        else alert("Will add functionality later");
    });
});

let weather = document.querySelector(".weather");
let weatherIcons = weather.querySelector(".weather img");

let timeElement = document.querySelector(".time");
let dateElement = document.querySelector(".date");

let hours = new Date().getHours();
if (hours >= 6 && hours < 18) {
    weatherIcons.src = "https://img.icons8.com/?size=100&id=zIVmoh4T8wh7&format=png&color=000000";
} else if (hours >= 18 && hours < 20) {
    weatherIcons.src = "https://img.icons8.com/?size=100&id=RtDA8YDN9Mi9&format=png&color=000000";
} else {
    weatherIcons.src = "https://img.icons8.com/?size=100&id=VT8HlhlnhUwL&format=png&color=000000";
}
weatherIcons.setAttribute("alt", "Weather Icon");

function updateTimeElement() {
    let now = new Date();

    // Update time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timeElement.textContent = hours + ':' + minutes + ' ' + ampm;

    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    dateElement.textContent = `${day}-${month}-${year}`;
}

updateTimeElement();
setInterval(updateTimeElement, 1000);

start.addEventListener("click", function (e) {
    e.stopPropagation();
    // contextMenu.style.display = "none";
    contextMenu.classList.remove("show");
    startMenu.classList.toggle("show");
});

document.addEventListener("click", function (e) {
    if (!startMenu.contains(e.target) && !start.contains(e.target)) {
        startMenu.classList.remove("show");
    }
});

main.addEventListener("contextmenu", function (e) {
    e.preventDefault();

    // startMenu.style.display = "none";
    startMenu.classList.remove("show");
    contextMenu.style.left = e.clientX + "px";
    contextMenu.style.top = e.clientY + "px";
    // contextMenu.style.display = "block";
    contextMenu.classList.add("show");
});

document.addEventListener("click", function (e) {
    if (!contextMenu.contains(e.target)) {
        // contextMenu.style.display = "none";
        contextMenu.classList.remove("show");
    }
});


let backgrounds = ['./assets/mountain.jpg', './assets/disc.jpg', './assets/city.png', './assets/forest.jpg'];
let currentBackgroundIndex = 0;

setInterval(() => {
    main.style.background = `url(${backgrounds[currentBackgroundIndex]}) center/cover no-repeat`;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}, 5000)