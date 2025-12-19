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