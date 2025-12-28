function openFeatures() {
    let allElems = document.querySelectorAll(".elem");
    let fullElemPage = document.querySelectorAll(".fullElem");
    let fullElemPageBackBtns = document.querySelectorAll(".fullElem .back");

    allElems.forEach((elem) => {
        elem.addEventListener("click", () => {
            if (elem.id == 2) {
                motivationalQuotes();
            }
            fullElemPage[elem.id].style.display = "block";
        });
    })

    fullElemPageBackBtns.forEach((back) => {
        back.addEventListener('click', (e) => {
            fullElemPage[back.id].style.display = "none";
        })
    })
}

openFeatures();

function todoList() {
    let form = document.querySelector(".add-task form");
    let taskInput = document.querySelector(".add-task form input");
    let taskTextarea = document.querySelector(".add-task form textarea");
    let taskImpCheckbox = document.querySelector(".add-task form .mark-imp #imp-task");

    let allTasksContainer = document.querySelector(".all-task");

    let currentTask = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        localStorage.setItem("tasks", JSON.stringify(currentTask));

        let task = '';
        currentTask.forEach((t, idx) => {
            task += `<div class="task">
                    <div class="task-details">  
                        <h5>${t.title} <span class="${t.important}">Imp!</span></h5>
                        <p>${t.details}</p>
                    </div>
                    <button id=${idx}>Mark as Completed</button>
                </div>`;
        });

        allTasksContainer.innerHTML = task;

        document.querySelectorAll(".task button").forEach((btn, index) => {
            btn.addEventListener("click", () => {
                currentTask.splice(btn.id, 1);
                renderTasks();
            });
        });
    }
    renderTasks();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        currentTask.push({
            title: taskInput.value,
            details: taskTextarea.value,
            important: taskImpCheckbox.checked
        });
        renderTasks();
        taskInput.value = '';
        taskTextarea.value = '';
        taskImpCheckbox.checked = false;
    });
}
todoList();

function dailyPlanner() {
    let dayPlanner = document.querySelector(".day-planner");
    let dayPlannerData = JSON.parse(localStorage.getItem("dayPlannerData")) || {};
    let p = document.querySelector(".day-planner-time p");
    let hours = Array.from({ length: 18 }, (_, idx) => `${idx + 6}:00 - ${idx + 7}:00`); // Hours from 6 AM to 11 PM

    let wholeDaySum = "";
    hours.forEach((hour, idx) => {
        let existingData = dayPlannerData[idx] ? dayPlannerData[idx] : "";
        wholeDaySum += `<div class="day-planner-time">
                        <p>${hour}</p>
                        <input id = ${idx} type="text" placeholder="Plan ${hour}" value="${existingData}">
                    </div>`
    });

    dayPlanner.innerHTML = wholeDaySum;

    let dayPlannerInput = document.querySelectorAll(".day-planner-time input");

    dayPlannerInput.forEach((input, idx) => {
        input.addEventListener("input", (event) => {
            dayPlannerData[idx] = event.target.value;
            localStorage.setItem("dayPlannerData", JSON.stringify(dayPlannerData));
            console.log(dayPlannerData)
        })
    });
}

dailyPlanner();

function motivationalQuotes() {
    let quote = document.querySelector(".motivation-body p");
    let author = document.querySelector(".motivation-author p");
    async function fetchQuotes() {
        let apiUrl = "https://dummyjson.com/quotes/random";
        try {
            let rawData = await fetch(apiUrl);
            if (rawData.status !== 200) {
                throw new Error("API URL is not defined");
            }
            let data = await rawData.json();
            quote.innerHTML = data.quote;
            author.innerHTML = `- ${data.author}`;
        }
        catch (e) {
            quote.innerHTML = "Failed to load quote.";
            author.innerHTML = "Failed to load author.";
        }
    }
    fetchQuotes();
}
motivationalQuotes();

// ------------------------ Pomodoro Timer ------------------------

function pomodoroTimer() {
    let timer = document.querySelector(".pomo-timer h1");
    let startBtn = document.querySelector(".start-timer");
    let pauseBtn = document.querySelector(".pause-timer");
    let resetBtn = document.querySelector(".reset-timer");
    let sessionLabel = document.querySelector(".pomodoro-timer-fullpage .session");

    let totalSeconds = 25 * 60;
    let timerInterval = null;
    let isWorkSession = true;

    function updateTimer() {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        timer.innerHTML = `${String(minutes).padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    updateTimer();

    function startTimer() {
        clearInterval(timerInterval);
        // timerInterval = setInterval(() => {
        //     totalSeconds--;
        //     if (totalSeconds < 0) {
        //         clearInterval(timerInterval);
        //         // alert("Time's up! Take a break.");
        //         totalSeconds = 25 * 60;
        //     }
        //     updateTimer();
        // }, 1000);
        if (isWorkSession) {
            totalSeconds = 25 * 60;
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateTimer();
                }
                else {
                    isWorkSession = false;
                    clearInterval(timerInterval);
                    timer.innerHTML = "05:00";
                    sessionLabel.innerHTML = "Take a Break Session";
                    sessionLabel.style.background = "var(--blue)";
                    totalSeconds = 5 * 60;
                }
            }, 1000)
        } else {
            totalSeconds = 5 * 60;
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateTimer();
                } else {
                    isWorkSession = true;
                    clearInterval(timerInterval);
                    // updateTimer();
                    timer.innerHTML = "25:00";
                    sessionLabel.innerHTML = "Work Session";
                    sessionLabel.style.background = "var(--green)";
                    totalSeconds = 25 * 60;
                }
            }, 1000)
        }
    }
    function pauseTimer() { clearInterval(timerInterval); }
    function resetTimer() {
        clearInterval(timerInterval);
        totalSeconds = 25 * 60;
        updateTimer();
    }

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);
}
pomodoroTimer();


let city = "Lucknow";
var data = null;

let header = document.querySelector(".allElems header");
let header2Temp = document.querySelector(".header-2 h2");
let header2Condition = document.querySelector(".header-2 h4");
let header2Humidity = document.querySelector(".header-2 .humidity");
let header2Wind = document.querySelector(".header-2 .wind");
let header2Precipitation = document.querySelector(".header-2 .precipitation");

async function fetchWeather() {
    let response = await fetch(`/api/weather?city=${city}`);
    data = await response.json();
    console.log(data.current)

    header2Temp.innerHTML = `${data.current.temp_c}°C`;
    header2Condition.innerHTML = `${data.current.condition.text}`;
    header2Humidity.innerHTML = `Humidity: ${data.current.humidity}%`;
    header2Wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
    header2Precipitation.innerHTML = `Precipitation: ${data.current.precip_mm}%`;
}

fetchWeather();

let date = null;

let header1Date = document.querySelector(".header-1 h1");
let header1Time = document.querySelector(".header-1 h2");
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(timeDate, 1000);
function timeDate(){
    date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    header1Date.innerHTML = `${String(date.getDate()).padStart(2, '0')+ '-' + monthsOfYear[date.getMonth()] + '-' + date.getFullYear()}`;

    if(hours >= 12){
        header1Time.innerHTML = `${daysOfWeek[date.getDay()]}, ${hours - 12}:${String(minutes).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')} pm`;
    } else {
        header1Time.innerHTML = `${daysOfWeek[date.getDay()]}, ${hours}:${String(minutes).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')} am`;
    }

    if(hours == 0 && minutes == 0 && date.getSeconds() == 0){
        fetchWeather();
    }

    if(hours > 18 || hours < 6){
        header.style.backgroundImage = "url('https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    } else if(hours >= 6 && hours < 12){
        header.style.backgroundImage = "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    } else {
        header.style.backgroundImage = "url('https://images.unsplash.com/photo-1614525597986-0d43dfd53d29?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
}

timeDate();

