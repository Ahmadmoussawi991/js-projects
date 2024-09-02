let message=document.getElementById('message')
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "user1@example.com",
        password: "password1",
        created_date: "2024-04-24",
        logged_in: false
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "user2@example.com",
        password: "password2",
        created_date: "2024-04-24",
        logged_in: false
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "user3@example.com",
        password: "password3",
        created_date: "2024-04-24",
        logged_in: false
    }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let user = users.find(u => u.email === email && u.password === password);
    if (user) {
        window.location.href = 'nextpage.html';
        clearlogin()
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});
let name=document.getElementById('name')
    let emailsign = document.getElementById('emailsign');
    let passwordsign = document.getElementById('passwordsign');
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    if (name.value !== "" && emailsign.value !== "" && passwordsign.value !== ""){
        let user = users.find(u => u.email === emailsign.value);
        if(!user){
            alert("user added succes")
        add()
        clearsignup()
        }
        else{
            alert("user already exist")
        }
    }
    else{
        alertmessage("please enter all field") 
    }
    
    
    
 
});
function add() {
    let newuser = {
      id:users.length+1,
      name: name.value,
      email: emailsign.value,
      password:passwordsign.value,
      created_date:generatedate(),
      logged_in:false
    };
    console.log(newuser);
    users.push(newuser);
    console.log(users);
    alert(`${name.value} has add succsefuly`);
  }
  function generatedate(){
let manualDate=new Date().getDate().toString()
console.log(manualDate);
return manualDate
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
  function clearlogin() {
    email.value = "";
    password.value=""
  }
  function clearsignup() {
    name.value = "";
    emailsign.value=""
    passwordsign.value=""
  }
  