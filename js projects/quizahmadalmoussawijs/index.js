let name = document.getElementById("name");
let type = document.getElementById("type");
let day = document.getElementById("day");
let option;
let check;
let checkValues = [];
let checkValue
let searchs=document.querySelector('#search')
let register = document.getElementById("reg");
let submit = document.getElementById("submit");
let table = document.getElementById("table");
let loginform = document.querySelector(".login");
let formreg = document.getElementById("formreg");
let filter = document.getElementById("filter");
let doctors = [
  { Name: "John", Type: "cardiology", available: "monday",check:"h",option:"o" ,selected:false,img:'logoua.png'},
  { Name: "ahmad", Type: "dermatology", available: "wednesday" ,check:"h",option:"o", selected:false,img:'logoua.png'},
  { Name: "hasen", Type: "family", available: "friday" ,check:"h",option:"o",selected:false,img:'logoua.png'},
];
window.onload = () => {
  show(doctors);
};
register.onclick = function () {
  check = document.querySelectorAll('input[name="option"]:checked');
  option = document.querySelector('input[name="check"]:checked');
  event.preventDefault();
  if (name.value !== "" && type.value !== "" && day.value !== "") {
  
    check.forEach(function(checkbox) {
      checkValues.push(checkbox.value);
    });
     checkValue = checkValues.join(', ');
    alert("Registered Successfully");
    add();
    clear();
    show(doctors);
  } else {
    alert("Please fill all the fields correctly.");
  }
};

function add() {
  let newdonition = {
    Name: name.value,
    Type: type.value.toUpperCase(),
    available: day.value,
    check:checkValue,
    option:day.value,
    img:srcs.value
  };
  console.log(newdonition);
  doctors.push(newdonition);
  console.log(doctors);
  alert(`${name.value} has add succsefuly`);
}
function clear() {
  name.value = "";
  type.selectedIndex = "0";
  day.selectedIndex = "0";
  day.value=""
  check.value=""
}
function show(doctors) {
  let bodytable = document.getElementById("bodytable");
  bodytable.innerHTML = "";
  doctors.forEach((doctors, index) => {
    bodytable.innerHTML += `
    <tr class="${doctors.selected ? 'select' : ''}">
        <td> ${doctors.Name}</td>
        <td> ${doctors.Type.toUpperCase()}</td>
        <td> ${doctors.check}</td>
        <td><button id="on" onclick=toggleSelection(${index})>${doctors.selected ? 'off' : 'on'}</button></td>
        <td><button id="delete" onclick=deleteitem(${index})>Delete</button></td>
        <td><img src=${doctors.img} ></td>
         </tr>`;
  });
}
function deleteitem(index) {
  let response = window.confirm("Are you sure to remove this item?");
  if (response) {
    doctors.splice(index, 1);
    show();
    alert("item is deleted");
    let statusFilter = (document.getElementById("statusFilter").value = "all");
  } else {
    alert("item not deleted");
  }
}
submit.onclick = function () {
  event.preventDefault();
  let username = document.getElementById("username").value.toLowerCase();
  let password = document.getElementById("password").value;
  let Usernamecheck = "HAdmin".toLowerCase();
  let Passwordcheck = "HPass";
  let message = document.getElementById("message");
  if (username !== "" && password !== "") {
    if (username === Usernamecheck && password === Passwordcheck) {
      table.classList.remove("displaynone");
      loginform.style.display = "none";
      searchs.style.display="block"
      rev.classList.remove("displaynone")
      filter.classList.remove("displaynone");
      formreg.classList.remove("displaynone");
      alertmessagesucses("login succsesfuly");
    } else {
      alertmessage("Incorrect username or password.");
    }
  } else {
    alert("please enter all fields");
  }
};
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
function filterDoctors() {
  let statusFilter = document.getElementById("statusFilter").value;
  let filteredDoctors = doctors;

  if (statusFilter !== "all") {
    filteredDoctors = doctors.filter(
      (doctors) => doctors.Type.toUpperCase() === statusFilter.toUpperCase()
    );
  }

  show(filteredDoctors);
}

function selectItem(button,select) {
  let row = button.parentNode.parentNode;
  row.classList.toggle("select");
  if (row.classList.contains("select")) {
    button.innerHTML = `off`;
    select=false
    
  } else {
    button.innerHTML = `on`;
    select=true
  }
}
function toggleSelection(index) {
  doctors[index].selected = !doctors[index].selected;
  show(doctors); 
}
let rev=document.getElementById('rev')
rev.onclick=()=>{
  console.log("clicked")
  let revd=doctors.sort((a,b)=>doctors.indexOf(b) - doctors.indexOf(a))
  //let revd=doctors.reverse()
  show(revd)
}
let arr=[1,5,8,3,2]
arr.sort((a, b) => (a % 2 === 0 ? -1:1 ) - (b % 2 === 0 ? -1: 1));
console.log(arr)
let srcs=document.getElementById('src')
function search(){
  let search=searchs.value
  let filterSearch=doctors.filter(doc=> doc.Name.toLowerCase().includes(search.toLowerCase()) )
 
  show(filterSearch)
}