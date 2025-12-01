let taskData = {};

let todo = document.getElementById("todo");
let progress = document.getElementById("progress");
let done = document.getElementById("done");
let draggedItem = null;

if (localStorage.getItem("tasks")) {
    taskData = JSON.parse(localStorage.getItem("tasks"));
}   

const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        // console.log("dragging", e.target)
        draggedItem = task;
    })
})


function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log(draggedItem, column);
        column.appendChild(draggedItem);
        column.classList.remove("hover-over");

        [todo, progress, done].forEach(col => {
            const tasks = col.querySelectorAll(".task");
            const count = col.querySelector(".right");
            count.innerText = tasks.length;
        });
    })
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// Modal related code
let toggleModalBtn = document.querySelector("#toggle-modal");
let modal = document.querySelector(".modal");
let modalBg = document.querySelector(".modal .bg");
const addTaskBtn = document.querySelector(".modal #add-new-task");

modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
});

toggleModalBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
});

addTaskBtn.addEventListener("click", () => {
    console.log("clicked")
    const taskTitleInput = document.querySelector("#task-title-input").value;
    const taskDescInput = document.querySelector("#task-desc-input").value;

    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `<h2>${taskTitleInput}</h2>
                     <p>${taskDescInput}</p>
                     <button>Delete</button>
                    `;
    todo.appendChild(div);

    [todo, progress, done].forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        taskData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        });

        localStorage.setItem("tasks", JSON.stringify(taskData));

        count.innerText = tasks.length;
    });

    div.addEventListener("drag", (e) => {
        draggedItem = div;
    });
    modal.classList.remove("active");
});