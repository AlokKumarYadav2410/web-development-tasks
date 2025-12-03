let taskData = {};

let todo = document.getElementById("todo");
let progress = document.getElementById("progress");
let done = document.getElementById("done");
let columns = [todo, progress, done];
let draggedItem = null;

function addTask(title, desc, column) {
    const div = document.createElement("div");

    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `<h2>${title}</h2>
                     <p>${desc}</p>
                     <button>Delete</button>
                    `;
    column.appendChild(div);

    div.addEventListener("drag", (e) => {
        draggedItem = div;
    });

    const deleteBtn = div.querySelector("button");
    deleteBtn.addEventListener("click", () => {
        div.remove();
        updateTaskCount();
    });
}

function updateTaskCount() {
    columns.forEach(col => {
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
}

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));

    for (let col in data) {
        const column = document.querySelector(`#${col}`)
        data[col].forEach(task => {
            addTask(task.title, task.desc, column);
        });
    }
    updateTaskCount();
}

const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
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
        column.appendChild(draggedItem);
        column.classList.remove("hover-over");

        updateTaskCount();
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
    const taskTitleInput = document.querySelector("#task-title-input").value;
    const taskDescInput = document.querySelector("#task-desc-input").value;

    if (!taskTitleInput) {
        alert("Task title cannot be empty!");
        return;
    }
    if (!taskDescInput) {
        alert("Task description cannot be empty!");
        return;
    }

    addTask(taskTitleInput, taskDescInput, todo);
    updateTaskCount();
    modal.classList.remove("active");

    document.querySelector("#task-title-input").value = "";
    document.querySelector("#task-desc-input").value = "";
});