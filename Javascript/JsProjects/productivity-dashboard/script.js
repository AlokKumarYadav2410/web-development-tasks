function openFeatures() {
    let allElems = document.querySelectorAll(".elem");
    let fullElemPage = document.querySelectorAll(".fullElem");
    let fullElemPageBackBtns = document.querySelectorAll(".fullElem .back");

    allElems.forEach((elem) => {
        elem.addEventListener("click", () => {
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

async function fetchQuotes() {
    let apiUrl = "https://dummyjson.com/quotes/random";
    try{
        let quote = document.querySelector(".motivation-body p");
        let author = document.querySelector(".motivation-author p")
        let rawData = await fetch(apiUrl);
        let data = await rawData.json();
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;
    }
    catch(e){
        console.log(e)
    }
}
fetchQuotes();