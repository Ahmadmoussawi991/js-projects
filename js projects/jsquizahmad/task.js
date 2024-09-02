let tasks = [   { Title: "Task 1", Description: "Description 1", duedate: "2024-04-30", Status: "Active" },
{ Title: "Task 2", Description: "Description 2", duedate: "2024-05-15", Status: "In Progress" },
{ Title: "Task 3", Description: "Description 3", duedate: "2024-05-20", Status: "Done" },];
showtasks()

let title = document.getElementById("title");
let desc = document.getElementById("desc");
let due = document.getElementById("due");
let status = document.getElementById("status");

function addtask() {
    if (title.value !== "" && desc.value !== "" && due.value !== "" && status.value !== "") {
        let task = {
            Title: title.value,
            Description: desc.value,
            duedate: due.value,
            Status: status.value
        };
        tasks.push(task);
        console.log("Task added:", task);
        showtasks();
        cleardata();
    } else {
        alert("Please fill all fields.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submittask').onsubmit = function(event) {
        event.preventDefault();
        addtask();
    };
});

function showtasks() {
    let tableBody = document.getElementById("tasksTableBody");
    tableBody.innerHTML = ""; 

    tasks.forEach(function(task, index) {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${task.Title}</td>
                <td>${task.Description}</td>
                <td>${task.duedate}</td>
                <td>${task.Status}</td>
                <td><button onclick="deleteTask(${index})">delete</button></td>
            </tr>
        `;
    });
}

function cleardata() {
    title.value = "";
    due.value = "";
    desc.value = "";
    status.value = "";
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    showtasks(); 
    let statusFilter = document.getElementById("statusFilter").value="all";
}
function filterTasks() {
    let statusFilter = document.getElementById("statusFilter").value;
    let filteredTasks = tasks;

    if (statusFilter !== "all") {
        filteredTasks = tasks.filter(task => task.Status.toLowerCase() === statusFilter.toLowerCase());
    }


    displayFilteredTasks(filteredTasks);
}

function displayFilteredTasks(filteredTasks) {
    let tableBody = document.getElementById("tasksTableBody");
    tableBody.innerHTML = ""; 

    filteredTasks.forEach(function(task, index) {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${task.Title}</td>
                <td>${task.Description}</td>
                <td>${task.DueDate}</td>
                <td>${task.Status}</td>
                <td><button onclick="deleteTask(${index})">delete</button></td>
            </tr>
        `;
    });
}
function searchTasks() {
    let searchInput = document.getElementById("searchInput").value;
    if (searchInput.trim() === "") {
        showtasks(); 
    } else {
        displayFilteredTasks(tasks.filter(task => task.Title.toLowerCase().includes(searchInput.toLowerCase())));
    }
}

function checkAndRemindTasks() {
    let currentDate = new Date(); 
    let currentDateString = currentDate.toISOString().split('T')[0];
    
    let todayTasks = tasks.filter(task => task.duedate === currentDateString);
    
    if (todayTasks.length > 0) {
        let taskTitles = todayTasks.map(task => task.Title).join(', '); 
        alert(`Today's tasks: ${taskTitles}`);
    } else {
        alert("No tasks due today.");
    }
}

checkAndRemindTasks();

setInterval(checkAndRemindTasks, 30*60*1000); 
