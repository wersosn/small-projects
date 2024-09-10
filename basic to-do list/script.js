//An array for tasks:
let tab = [];
let number = 1;

//Showing and hiding elements:
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


//Function displaying a list of tasks:
function displayTasks() {
    const display = document.getElementById("demo");
    display.innerHTML = '';
    tab.forEach(task => {
        const t = document.createElement('p');
        t.innerHTML = `<div id="element">
        <input type="checkbox"> ${task.title}
            <button class="dots" onclick="showDetails(${task.id})">
            <img src="/basic to-do list/images/3dots.png"></button>
            <button class="dots" onclick="deleteTask(${task.id})">
            <img src="/basic to-do list/images/trash.png" alt="Delete"></button><br>
            <div id="details-${task.id}" style="display: none;">
                Notes: ${task.content}<br>
                Deadline: ${task.date}<br>
            </div>
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

