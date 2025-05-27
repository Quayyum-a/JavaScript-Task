const taskList = document.querySelector("#task-list ul");

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" class="task-checkbox" ${
      task.completed ? "checked" : ""
    }><span class="name">${task.text}</span><span class="delete">delete</span>`;
    if (task.completed) {
      li.classList.add("completed");
    }
    taskList.appendChild(li);
  });
}


function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach((li) => {
    const text = li.querySelector(".name").textContent;
    const completed = li.classList.contains("completed");
    tasks.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskList.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    taskList.removeChild(li);
    saveTasks();
  }
});

taskList.addEventListener("change", (e) => {
  if (e.target.className === "task-checkbox") {
    const li = e.target.parentElement;
    li.classList.toggle("completed");
    saveTasks();
  }
});

const addForm = document.forms["add-task"];
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" class="task-checkbox"><span class="name">${value}</span><span class="delete">delete</span>`;
    taskList.appendChild(li);
    addForm.querySelector('input[type="text"]').value = "";
    saveTasks();
  }
});

const searchInput = document.querySelector("#page-banner input");
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  const taskItems = taskList.querySelectorAll("li");
  taskItems.forEach((item) => {
    const taskName = item.querySelector(".name").textContent.toLowerCase();
    item.style.display = taskName.includes(filter) ? "" : "none";
  });
});
