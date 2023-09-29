// JavaScript logic for dragging and dropping tasks
const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

tasks.forEach(task => {
    task.addEventListener('dragstart', handleDragStart);
    task.addEventListener('dragover', handleDragOver);
    task.addEventListener('drop', handleDrop);
});

function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text/plain');
    const targetColumn = event.target.closest('.column');

    const task = document.getElementById(taskId);
    targetColumn.appendChild(task);
}
