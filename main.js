function addTask() {
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value;

    if (taskValue.trim() === "") {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskValue}</span>
        <button onclick="editTask(this)">Chỉnh sửa</button>
        <button class="delete-btn" onclick="deleteTask(this)">Xóa</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";  // Clear input
}

function editTask(button) {
    const taskSpan = button.previousElementSibling;
    const newTaskValue = prompt("Chỉnh sửa công việc:", taskSpan.textContent);

    if (newTaskValue !== null) {
        taskSpan.textContent = newTaskValue;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
