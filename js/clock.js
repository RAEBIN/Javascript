const clock = document.querySelector("h1#clock");

// function sayHello(){
//     console.log("hello");
// } ctrl kc/ku

//intervel :매번 (2초마다)
//timeout : 5초 뒤 실행

//setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

function getClock(){
    const date = new Date();

    //01로 보이게 만들고 싶어
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    //string 길이를 2로 하고 그 빈자리만큼 0을 앞에 채움(padEnd는 뒤)
    //pad는 string에서 되니까 string으로 감싸주기 

    clock.innerText = `${hours}:${minutes}:${seconds}`; //백틱 
}

getClock();//웹사이트 로드 되자마자 보여주고 1초마다 인터벌
setInterval(getClock, 1000);


