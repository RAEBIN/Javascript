const toDoForm = document.querySelector("#todo-form");
//2. input
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
//5. todo 저장하기 - array 만들기
let toDos = [];//업데이트 가능하도록 만듬
const TODOS_KEY = "toDos";


function saveToDos(){
    //array로 local에 저장하고 싶음
    //array->string(적어도 array모양으로 보이게 저장해줌)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// delteToDo 
function deleteToDo(event){
    //버튼을 클릭할 때 event를 얻게됨(event안에는 많은 정보가 있음!)
    //event.target은 클릭된 html element
    //parentelement는 클릭된 element의 부모

    //console.log(event.target.parentElement);

    const li = event.target.parentElement;//결국 얘를 지우고 싶은거임

    li.remove();//화면에서 지움
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id) );//local에서 지움
    //toDo.id 는 number, li.id 는 string

    //지우고 나면 디비에 업데이트 해야하니까 saveToDos 호출
    saveToDos();
}

//3. function
function paintToDo(newToDo){
    //html에 li 만들기
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;

    //4. todo 삭제버튼 만들기
    const button = document.createElement("button");
    button.innerText = "❌"; 

    button.addEventListener("click", deleteToDo);

    //button 넣기
    li.appendChild(button); 
    //span 을 li로 넣기
    li.appendChild(span);
   
    //todo-list에 li 넣기
    toDoList.appendChild(li);  
}

//1. submit
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;//input 저장(복사)
    toDoInput.value="";//엔터치면 싹지워

    //todo를 obj형식으로 바꾸기 위해 새로 만듦
    const newTodoObj = {
        text: newToDo,
        id: Date.now()
    }

    //local storage에 저장하러 갈거임
    toDos.push(newTodoObj);

    //text->obj를 받게 되므로 함수수정
    //text 대신 obj을 넣어버려서 paintToDo에서 newToDo.text해줌 
    paintToDo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);



//살아있는 array 얻을것

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //toDos에 값이 있다면 복원
    toDos = parsedToDos;

    //parsedToDos item 마다 sayHello실행
    parsedToDos.forEach(paintToDo);
    //forEach((item)=> console.log("this is the turn of", item)); 같은거임
    //"a" = {text,id} 왜냐면 obj를 넘겼으니까
}


