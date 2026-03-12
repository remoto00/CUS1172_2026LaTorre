let tasks = [];

const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

form.onsubmit = function(event) {

    event.preventDefault();

    const title = document.getElementById("taskTitle").value;
    const priority = document.getElementById("taskPriority").value;
    const status = document.querySelector('input[name="status"]:checked').value;

    const task = {
        title: title,
        priority: priority,
        status: status
    };

    tasks.push(task);

    displayTask(task);

    form.reset();
};

function displayTask(task) {

    const li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML = `
        <strong>${task.title}</strong>
        | Priority: ${task.priority}
        | Status: <span class="status">${task.status}</span>

        <button class="btn btn-success btn-sm ms-2 complete">Complete</button>
        <button class="btn btn-danger btn-sm ms-2 remove">Remove</button>
    `;

    taskList.appendChild(li);

    const completeBtn = li.querySelector(".complete");
    const removeBtn = li.querySelector(".remove");

    completeBtn.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    removeBtn.onclick = function() {
        li.remove();
    };
}
