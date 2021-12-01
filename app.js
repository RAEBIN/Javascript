const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event){
    event.preventDefault();//새로고침 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //console.log(username);
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}


loginForm.addEventListener("submit",onLoginSubmit);