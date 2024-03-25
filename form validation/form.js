// get the element

const form = document.getElementById('form');
const username = document.getElementById('Username');
const password = document.getElementById('pswd');
const email = document.getElementById('mail');
const dob = document.getElementById('dob');
const reset = document.getElementById('reset');

// const Success = document.getElementsByClassName('success-icon');
// const Failure = document.getElementsByClassName('failure-icon');
// const Error = document.getElementsByClassName('error');

form.addEventListener("submit", e =>{
    e.preventDefault();
    Validform();
});
reset.addEventListener('reset',()=>{
    form.appendChild()
        usernameValue = "";
        emailValue = "";
        passwordValue = "";
        dobValue = "";
})
//validinputs


//error set 
 
function setError(input, message) {
    const input_control = input.parentElement;
    const errorDisplay = input_control.querySelector('span');
    errorDisplay.innerText = message;
    input_control.className = 'input_control error';
  
   
};

//success set

function setSuccess  (input) {
    const input_control = input.parentElement;
    input_control.className = 'input_control success';
};

//validvalue


function isValidEmail(email){
    const mail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mail.test(email);
}

function isValidPassword(password){
    const pswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return pswd.test(password);
    
}


//function start

function Validform(){

    const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const dobValue = dob.value.trim();
// const formValue = form.value.trim();

   
    if(usernameValue === ""){
        setError(username, "username is required");
    }
    else{
        setSuccess(username);
    }
    if(emailValue === ""){
        setError(email, "Enter a Mail id");
    }
    else if (!isValidEmail(emailValue)){
        setError(email, "Enter a valid mailid");
    }
    else{
        setSuccess(email);
    }
    if(passwordValue === ""){
        setError(password, "Password should be enter");
    }
    else if(!isValidPassword(passwordValue)){
        setError(password, "Enter a valid password");
    }
    else{
        setSuccess(password);
    }
    if(dobValue === ""){
        setError(dob, "Enter a value");
    }
    else{
        setSuccess(dob);
    }
    if(usernameValue == "" || emailValue == "" || password == ""|| dobValue == ""){
        swal({
            title: "Fields Empty!",
            text: "Please fill the missing files!",
            icon: "warning",
            button: "Done!",
          });
    }
    else if (!isValidEmail(emailValue)){
        swal({
            title: "WRONG Enter!",
            text: "Please Enter correctly!",
            icon: "warning",
            button: "Done!",
          });
    }
    else if(!isValidPassword(passwordValue)){
        swal({
            title: "Wrong Enter!",
            text: "Please Enter correctly!",
            icon: "warning",
            button: "Done!",
          });
    }
    else{
        swal({
            title: "Good job!",
            text: "Submitted Successfully!",
            icon: "success",
            button: "Done!",
          });
    }
    if(usernameValue == "" || emailValue == "" || password == ""|| dobValue == ""){
          alert('please fill the values');
    }
    else if (!isValidEmail(emailValue)){
        alert("Enter a valid mailid");
    }
    else if(!isValidPassword(passwordValue)){
        alert("Enter a valid password");
    }
    else{
        alert('submitted successfully')
    }
}        
