const API_KEY= "d5d974da0c8c23e68bf7e919f718480f";

function onGeoOk(positon){
    const lat = positon.coords.latitude;
    const lon = positon.coords.longitude;
    //console.log("You live in", lat, lon);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    
    //network에 가보기(js가 url을 부르는것임. 내가 url누를 필요 없음)
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = `in ${data.name}`;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
            }
        );//내용 추출 후 데이터 로
}

function onGeoError(){
    alert("Ca't find you. No weather for you.");
}

//내 위치를 하나의 obj으로 보내줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//위도, 경도를 장소로 바꿔주기


//api 계정 열어주기(openweathermap.org) 내 위치의 날씨, 장소이름 알려줌