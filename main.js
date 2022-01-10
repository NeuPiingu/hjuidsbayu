const testcont = document.getElementById('testConter');
const enterBtn = document.getElementById('enter');

const enterLogo = document.getElementById('enterLogo');

const modal = document.getElementById('modal');
const userinput = document.getElementById('userInput');
const form = document.getElementById('form');
const signin = document.getElementById('signin');
const signInForm = document.getElementById('sign-in')

const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const user = {email:'', username:'', password:''};

//initiate sign up
enterBtn.addEventListener('click', function(){ 
    enterLogo.classList.add('fadeOut');
    setTimeout(function() {
        enterLogo.style.display = "none";
        enterLogo.style.display = "none";
        modal.style.display ="block";
        userinput.style.display ="block";
    }, 1000);
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
        document.getElementById('userInput').style.display = "none";
        document.getElementById('sign-in').style.display = "block";

        userinput.style.display ="none";
        signin.style.display = "block";
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
        document.getElementById('sign-in').style.display ="none";
        document.getElementById('postLogin').style.display ="block";
    }
    else {
        setErrorFor(username2, 'invalid username or password');
    }
};


document.getElementById('testersign').addEventListener('click', function(){
    enterLogo.style.display = "none";
    testcont.style.display = "none";
    signin.style.display = "none";
    document.getElementById('postLogin').style.display ="none";
    modal.style.display ="block";
    userinput.style.display ="block";

})
document.getElementById('testerlog').addEventListener('click', function(){
    enterLogo.style.display = "none";
    testcont.style.display = "none";
    userinput.style.display ="none";
    document.getElementById('postLogin').style.display ="none";
    modal.style.display ="block";
    signin.style.display = "block";

})

document.getElementById('testerAni').addEventListener('click', function(){
    enterLogo.style.display = "none";
    testcont.style.display = "none";
    signin.style.display = "none";
    userinput.style.display ="none";
    modal.style.display ="block";
    document.getElementById('postLogin').style.display ="block";

})