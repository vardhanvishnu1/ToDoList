function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.innerText = taskText;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.innerText = '✔️';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.innerText = '✏️';
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", span.innerText);
    if (newTask !== null && newTask.trim() !== "") {
      span.innerText = newTask.trim();
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '🗑️';
  deleteBtn.onclick = () => taskList.removeChild(li);

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = "";
}
