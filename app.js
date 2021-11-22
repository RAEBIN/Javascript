 //html은 css와 js 의 중간 역할 (html 접근하고 읽어옴/변경가능). 얘가 브라우저에서 실행되어 다른애들도 실행시켜줌
 
//JS는 HTML에 접근하고 읽어올 수 있다. 모든것들은 document(=web site/html)로 부터 시작됨.

const title = document.querySelector(".hello h1");//css selector 수가 많이 존재하면 첫번째 1개만 가져옴

//title.innerText = "hello";

//console.log(title);

function handleTitleClick(){
    //console.log("titile was clicked!");
    title.style.color = "blue";
}

function handleMouseenter(){
    title.innerText= "Mouse is here!";

}

function handleMouseleave(){
    title.innerText= "Mouse is gone!";
}

//function을 js에 넘겨줘서 user가 click할때 function이 실행되도록 함
title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseenter);
title.addEventListener("mouseleave",handleMouseleave);