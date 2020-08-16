const nameContainer=document.querySelector(".name"),
named=nameContainer.querySelector("input"),
greeting=document.querySelector(".greeting");

const USER="currentUser", SHOWING="showing";
//arugument 생성

function saveName(text){
    localStorage.setItem(USER, text);
} //localStorage에 이름 저장

function handleSubmit(e){
    e.preventDefault();
    const currentValue=named.value;
    paint(currentValue);
    saveName(currentValue);
} //이름 적고 저장할 경우

function askName(){
    nameContainer.classList.add(SHOWING);
    nameContainer.addEventListener('submit', handleSubmit);
}//form에 있는 값 넣어줌

function paint(text){
    nameContainer.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText=`WELCOME ${text}`;
}
//user가 localStorage에 저장되어있을 때

function loadName(){
    const currentUser= localStorage.getItem(USER);
    if(currentUser === null){
            askName();
    }else{
            paint(currentUser);
    }
}


function init(){
    loadName();
}
init();