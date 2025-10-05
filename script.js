document.addEventListener('DOMContentLoaded' , () => {

const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

const feedbackDiv =document.getElementById('form-feedback');

let isValid = true;
const messages = [];
//username validation 
const usernameInput = document.getElementById('username');
   
    const username = usernameInput.value.trim();

    if (username.length < 3) {
        isValid = false;
        messages.push("Username must be atleast 3 characters long");
    }

//email validation
const emailInput = document.getElementById('email');

const email = emailInput.value.trim();
    if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push('Please input a valid email');
    }

//password validation
const passwordInput = document.getElementById('password');

const password = passwordInput.value.trim();
if (password.length < 8) {
    isValid = false;
    messages.push('password too short, input atleast 8 characters');
}

feedbackDiv.style.display ="block";
if (isValid ===true) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
} else {
    feedbackDiv.style.color = "#dc3545"
    feedbackDiv.innerHTML = messages.join("<br>");

}

console.log("username", username);

});





});