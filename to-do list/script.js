//An array for tasks:
let tab = [];
let number = 1;

//Showing and hiding the 'add new task' form:
function showAdd() {
    let hidden = document.getElementsByClassName('add');
    for(let i=0; i<hidden.length; i++) {
        hidden[i].style.display = 'inline';
    }
}

function hideAdd() {
    let hidden = document.getElementsByClassName('add');
    for(let i=0; i<hidden.length; i++) {
        hidden[i].style.display = 'none';
    }
}

function symbols(value) {
    switch(value) {
        case '+':
            addTask();
            break;
        default:
            break;
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
        ${task.id}. ${task.title}`;   
        //<button class="details" onclick="showDetails()">A</button>`;
        display.appendChild(t);
    });
}

function showDetails() {
    //todo
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

/*for later: 
t.innerHTML = `<input type="checkbox" onclick="completedTask(${task.id}, this.checked)" 
        ${task.completion ? 'checked' : ''}>
        ${task.title}<br>
        ${task.content}<br>${task.date}
        <button onclick="deleteTask(${task.id})">Delete</button><br>`;*/