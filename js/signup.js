const enterBtn = document.getElementById('enter');

const enterLogo = document.getElementById('enterLogo');
const ghost = document.getElementById('ghost');

const modal = document.getElementById('modal');
const userinput = document.getElementById('userInput');
const form = document.getElementById('form');
const regBtn = document.getElementById('regBtn');
const signin = document.getElementById('signin');
const signInForm = document.getElementById('sign-in')
const logBtn = document.getElementById('logBtn');

const email = document.getElementById('email');
const emailValue = email.value.trim();

const username = document.getElementById('username');
const username2 = document.getElementById('username2');

const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const password3 = document.getElementById('password3');

const inputCorrect = {email: "", username: "", password:"", username2: "", password3: ""};

const user = {email:'', username:'', password:''};

//Landingpage stuff
//initiate sign up
enterBtn.addEventListener('click', function(){ 
    enterLogo.classList.add('fadeOut');
    enableButton();
    setTimeout(function() {
        enterLogo.style.display = "none";
        modal.style.display ="block";
        userinput.style.display ="block";
    }, 1000);
});

email.addEventListener('input', function(){
    let emailValue = email.value;
    if(!isEmail(emailValue)){
        setErrorFor(email, 'Please enter a valid email');
        inputCorrect.email = "false";
    }
    else {setSuccessFor(email);
        console.log("huehuehuehuehuehue");
        inputCorrect.email = "true";
        enableButton();
    };
});

username.addEventListener('input', function(){
    inputCorrect.username = "true";
    enableButton();
});

password.addEventListener('input', function(){
    passwordValue = password.value;
    let passLength = passwordValue.length;
    if(passLength < 5){
        setErrorFor(password, 'Password must be longer than 5 characters');
    }
    else {setSuccessFor(password);
        console.log("huehuehuehuehuehue");
        enableButton();
        document.getElementById('pass2').classList.add('animateFromTop');
        document.getElementById('pass2').classList.add('w3-animate-opacity');
        document.getElementById('pass2').style.display= "block";
    };
});

password2.addEventListener('input', function(){
    password2Value = password2.value;
    if(password2Value != password.value){
        setErrorFor(password2, 'Passwords do not match');
        setErrorFor(password, 'Passwords do not match');
        inputCorrect.password = "false";
    }
    else {
        setSuccessFor(password2);
        setSuccessFor(password);
        console.log("huehuehuehuehuehue")
        inputCorrect.password = "true";
        enableButton();

    };
});

password3.addEventListener('input', function(){
        console.log("huehuehuehuehuehue");
        inputCorrect.password3 = "true";
        enableLogButton();
});

username2.addEventListener('input', function(){
    if (username2.value !=''){
        inputCorrect.username2 = "true";
        enableLogButton();
    };
    
});


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    checkSuccess();
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUser();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //email check
    if(emailValue === '' ) {
        setErrorFor(email, 'Please enter your email');
        
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Please enter a valid email');

    }
    else {
        setSuccessFor(email);
    }

    //username check
    if(usernameValue === '' ) {
        setErrorFor(username, 'Please enter a username');
    }
    else {
        setSuccessFor(username);
    }

    //password check
    if(passwordValue === '' ) {
        setErrorFor(password, 'Please enter a password');
    }
    else {
        setSuccessFor(password);
    }

    //password check
    if(password2Value === '' ) {
        setErrorFor(password2, 'Please repeat password');
    }
    else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
        setErrorFor(password, 'Passwords do not match');

    } 
    else {
        setSuccessFor(password2);
    }
};


function checkSuccess() {
    if(email.parentElement.classList.contains('success') && username.parentElement.classList.contains('success') && password.parentElement.classList.contains('success')){
        user.email = email.value.trim();
        user.username = username.value.trim();
        user.password = password.value.trim();
        userInput.classList.add('fadeOut');

        setTimeout(function() {
            userInput.style.display = "none";
            signin.style.display ="block";
            signin.classList.add('fadeIn')
        }, 1300);
    }

};

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
};

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    formControl.className = 'form-control success';

};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
};

function checkUser() {
    const loginUsername = document.getElementById('username2');
    const loginPassword = document.getElementById('password3');
    if (loginUsername.value === user.username && loginPassword.value === user.password) {
        signin.classList.remove('fadeIn');
        signin.classList.add('fadeOut');
        setTimeout(function() {
            signin.style.display = "none";
            document.getElementById('postLogin').style.display ="block";
            document.getElementById('postLogin').classList.add('fadeIn');
        }, 1300);
    }
    else {
        setErrorFor(username2, 'invalid username or password');
    }
};

function enableButton(){
    eM = inputCorrect.email;
    uS = inputCorrect.username;
    pS = inputCorrect.password;
    if(eM === 'true' && uS === "true" && pS === "true"){
        document.getElementById('regBtn').disabled = false;
        setSuccessFor(username);
    }
    else {
        document.getElementById('regBtn').disabled = true;
    }

};
function enableLogButton(){
    if(inputCorrect.username2 === "true" && inputCorrect.password3 === "true"){
        document.getElementById('logBtn').disabled = false;
    }
    else {
        document.getElementById('logBtn').disabled = true;
    }

};
