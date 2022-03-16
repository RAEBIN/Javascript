const images =[
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg"
]//img 폴더의 이름이랑 같게 해줌

const choosenImage = images[Math.floor(Math.random()*images.length)];

//random()에 images.length는 array 갯수만큼 곱해줘서 범위 만드는거(10개면 10을 곱함~~), length로 하면 array 갯수 기억 안해도 됨

//지금까지와는 반대로 html->js 가져와서 하는게 아니라 , js->html로 가져갈것임

const bgImage = document.createElement("img");
bgImage.classList.add("bgImage");
//배경화면 전체화면으로 만들어줌

bgImage.src= `img/${choosenImage}`;
//img element 만들기 완성


document.body.appendChild(bgImage);

//추가 (appen:가장 뒤/ prepend: 가장 위)
