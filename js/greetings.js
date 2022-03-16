const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";//classname
const USERNAME_KEY = "username";//local storage key


function onLoginSubmit(event){

    event.preventDefault();//새로고침 막음
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;    
    localStorage.setItem(USERNAME_KEY, username);//브라우저 내의 디비
    //console.log(username);
    paintGreetings(username);//loginInput 에서 받은 username을 가져옴
    
}

function paintGreetings(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the h1(greetings)
    paintGreetings(savedUsername);//local에 정보있으면 savedUsername에서 가져옴
    
}