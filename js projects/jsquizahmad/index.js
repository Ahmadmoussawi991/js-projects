/*• Create an HTML login form where users must enter a specific username and password.
• The credentials are not case-sensitive, meaning "ADMIN@UA.EDU.LB" is considered the same as
admin@ua.edu.lb.
• Default credentials:
o Username: admin@ua.edu.lb
o Password: UA@2024
• If the entered credentials are incorrect, display an error message.
• Upon successful login, generate a 4-digit OTP.
• Prompt the user to input the OTP using the prompt function to finish the sign-in process.
• If the entered OTP matches the generated OTP, navigate to the tasks screen.
• If the entered OTP is incorrect, display an error message.
how  can i do this in js ?*/
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value.toLowerCase();
    var password = document.getElementById('password').value.toLowerCase();
    var defaultUsername = 'admin@ua.edu.lb'.toLowerCase();
    var defaultPassword = 'UA@2024'.toLowerCase();
    let message =document.getElementById("message");
    if (username === defaultUsername && password === defaultPassword) {
      var otp = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
      document.querySelector('.hello').innerHTML=otp
      var userOTP = prompt('Enter the OTP:', '');
      if (parseInt(userOTP) === otp) {
        window.location.href = 'tasks.html'; // Navigate to tasks screen
      } else {
        alertmessage('Incorrect OTP. Please try again.')
      }
    } else {
    alertmessage('Incorrect username or password.')
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
 