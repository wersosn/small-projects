//An array for tasks:
let tab = [];
let number = 1;

//Showing and hiding elements:
function showAdd() {
    let add = document.getElementById('main');
    add.style.display = 'none';
    let list = document.getElementById('list');
    list.style.display = 'none';
    let hidden = document.getElementsByClassName('add');
    for(let i=0; i<hidden.length; i++) {
        hidden[i].style.display = 'inline';
    }
}

function hideAdd() {
    let add = document.getElementById('main');
    add.style.display = 'inline';
    let list = document.getElementById('list');
    list.style.display = 'inline';
    let hidden = document.getElementsByClassName('add');
    for(let i=0; i<hidden.length; i++) {
        hidden[i].style.display = 'none';
    }
}

function showDetails(idx) {
    const d = document.getElementById(`details-${idx}`);
    if(d.style.display === 'none') {
        d.style.display = 'inline';
    }
    else {
        d.style.display = 'none';
    }
}

//Function adding task (object) to the array:
function addTask(title, content, date) {
    const task = {
        id: number++,
        title: title,
        content: content,
        date: date, 
        completion: false
    };
    tab.push(task);
    displayTasks();
}

//Function removing task (object) from the array:
function deleteTask(idx) {
    tab = tab.filter(task => task.id !== idx);
    displayTasks();
}

//Function for checking task completion:
function completedTask(idx) {
    tab = tab.find(task => task.id === idx);
    if(task) {
        task.completion = isChecked;
        displayTasks();
    }
}

//Function displaying a list of tasks:
function displayTasks() {
    const display = document.getElementById("demo");
    display.innerHTML = '';
    tab.forEach(task => {
        const t = document.createElement('p');
        t.innerHTML = `<input type="checkbox" onclick="completedTask(${task.id}, this.checked)" 
        ${task.completion ? 'checked' : ''}>
        ${task.id}. ${task.title}
        <button class="details" onclick="showDetails(${task.id})">
        <img src="/to-do list/images/3dots2.png"></button>
        <button class="details" onclick="deleteTask(${task.id})">
        <img src="/to-do list/images/trashcan2.png" alt="Delete"></button><br>
        <div id="details-${task.id}" style="display: none;">
           Content: ${task.content}<br>
           Deadline: ${task.date}<br>
        </div>`;   
        display.appendChild(t);
    });
}

document.getElementById("addingTask").addEventListener('submit', function (event) {
    event.preventDefault(); 
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const date = document.getElementById("date").value;
    addTask(title, content, date);
    document.getElementById("addingTask").reset();
});

displayTasks();
