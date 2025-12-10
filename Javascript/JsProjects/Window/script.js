let main = document.querySelector("main");
let contextMenu = document.querySelector(".context-menu");
let startMenu = document.querySelector(".start-menu");
let start = document.querySelector(".start");

let timeElement = document.querySelector(".time");
let dateElement = document.querySelector(".date");

function updateTimeElement() {
    let now = new Date();

    // Update time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timeElement.textContent = hours + ':' + minutes + ' ' + ampm;

    // Update numeric date: day/month/year
    let day = now.getDate();
    let month = now.getMonth() + 1; // months are 0-indexed
    let year = now.getFullYear();

    // Add leading zeros if needed
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    dateElement.textContent = `${day}-${month}-${year}`;
}

updateTimeElement();
setInterval(updateTimeElement, 1000);


// start.addEventListener("click", function (e) {
//     e.stopPropagation();
//     contextMenu.style.display = "none";

//     if (startMenu.style.display === "block") {
//         startMenu.style.display = "none";
//     } else {
//         startMenu.style.display = "block";
//         // startMenu.style.opacity = "1";  
//         // startMenu.style.transition = "all 0.3s ease";
//         // startMenu.style.transform = `translateX(${-50}%) translateY(${0})`;
//     }
// });

// document.addEventListener("click", function (e) {
//     if (!startMenu.contains(e.target) && !start.contains(e.target)) {
//         startMenu.style.display = "none";
//     }
// });


start.addEventListener("click", function (e) {
    e.stopPropagation();
    // contextMenu.style.display = "none";  // hide context menu
    contextMenu.classList.remove("show");
    startMenu.classList.toggle("show");  // animate start menu
});

document.addEventListener("click", function (e) {
    if (!startMenu.contains(e.target) && !start.contains(e.target)) {
        startMenu.classList.remove("show");  // hide start menu with animation
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
