const weather=document.querySelector(".weather");

const COORDS= 'coords';
const APIKEY="dee03be77266269e1eb9dff02b68f47e";


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`
        ).then(function(r){
            return r.json();
        }).then(function(json){
            const tem=json.main.temp;
            const place=json.name;
            weather.innerText=`${tem}℃ city is ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(p){
    const latitude = p.coords.latitude;
    const longitude= p.coords.longitude;
    const coordsObj= {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(p){

}

function loadCoords(){
    const loadedCoords= localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        const parsedCoords=JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}








function init(){
    loadCoords();
}
init();