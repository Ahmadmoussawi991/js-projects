let name=document.getElementById('name');
let type=document.getElementById('type')
let contact=document.getElementById('contact')
let register=document.getElementById('reg')
let submit=document.getElementById( 'submit' )
let table=document.getElementById('table')
let loginform=document.querySelector('.login')
let blood=[
    {Name: "John",
    Type:"AB",
    Contact:1234567890
},
{Name: "ahmad",
Type:"O",
Contact:1234567890
},
{Name: "hasen",
Type:"B",
Contact:1234567890
}
]
window.onload=()=>{
    show()
}
register.onclick = function () {
    event.preventDefault()
    if (name.value!=="" && type.value!=="" && contact.value!=="") {
        alert("Registered Successfully")
        add();
        clear();
        show();
    } else {
        alert("Please fill all the fields correctly.")
    }
}

function add(){
    let newdonition={
        Name:name.value,
        Type:type.value.toUpperCase(),
        Contact:parseInt(contact.value)
    }
    console.log(newdonition)
    blood.push(newdonition);
    console.log(blood)
    alert(`${name.value} has add succsefuly`)
    
}
function clear(){
    name.value=""
    type.selectedIndex='0'
    contact.value=""
}
function show(){
    let  bodytable=document.getElementById('bodytable')
    bodytable.innerHTML=""
    blood.forEach((blood,index)=>{
        bodytable.innerHTML+=`
        <tr>
        <td> ${blood.Name}</td>
        <td> ${blood.Type}</td>
        <td> ${blood.Contact}</td>
        <td><button onclick=selectItem(this)>select</button></td>
        <td><button onclick=deleteitem(${index})>Delete</button></td>
         </tr>`;
        
    })
}
function deleteitem(index){
  let response =window.confirm("Are you sure to remove this item?")
    if(response){
    blood.splice(index,1);
show();
alert("Item deleted")
let statusFilter = document.getElementById("statusFilter").value="all";
  
    }
    
    else{
        alert("item not deleted")
    }
}
submit.onclick = function () {
    event.preventDefault()
    var username = document.getElementById('username').value.toLowerCase();
    var password = document.getElementById('password').value.toLowerCase();
    var defaultUsername = 'admin@ua.edu.lb'.toLowerCase();
    var defaultPassword = 'UA@2024'.toLowerCase();
    let message =document.getElementById("message");
    if (username === defaultUsername && password === defaultPassword) {
         table.classList.remove('displaynone')
         loginform.style.display="none"
        
         alertmessagesucses("login succsesfuly")
    }
    else {
        alertmessage('Incorrect username or password.')
        }
}
function alertmessage(chat) {
    message.style.display = "block";
    message.style.background = "red";
    message.innerHTML = chat;
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
    message.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function alertmessagesucses(chat) {
    message.style.display = "block";
    message.style.background = "green";
    message.innerHTML = chat;
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
    message.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function filterTasks() {
    let statusFilter = document.getElementById("statusFilter").value;
    let filteredTasks = blood;

    if (statusFilter !== "all") {
        filteredTasks = blood.filter(blood => blood.Type.toUpperCase() === statusFilter.toUpperCase());
    }


    displayFilteredTasks(filteredTasks);
}

function displayFilteredTasks(filteredTasks) {
    let  bodytable=document.getElementById('bodytable')
    bodytable.innerHTML=""
    filteredTasks.forEach((blood,index)=>{
        bodytable.innerHTML+=`
        <tr>
        <td> ${blood.Name}</td>
        <td> ${blood.Type}</td>
        <td> ${blood.Contact}</td>
        <td><button onclick=selectItem(this)>select</button></td>
        <td><button onclick=deleteitem(${index})>Delete</button></td>
         </tr>`;
        
    })
}
function selectItem(button) {
    let row = button.parentNode.parentNode; 
    row.classList.toggle('select');
    if (row.classList.contains('select')) {
       button.innerHTML=`deselect`
    }
    else{
        button.innerHTML=`select`
    }
}

