document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task');
    const taskList = document.querySelector('ul');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(text) {
        const li = document.createElement('li');

        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.classList.add('checkbox');
        completeCheckbox.addEventListener('click', function() {
            if (completeCheckbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });
        li.appendChild(completeCheckbox);

        const taskContent = document.createElement('span');
        taskContent.classList.add('text');
        taskContent.textContent = text;
        li.appendChild(taskContent);

        

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
});