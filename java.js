const container=document.querySelector(".clock-body"),clock= container.querySelector("h1");
//시간


function getTime(){
    const date=new Date();
    const hour= date.getHours();
    const min=date.getMinutes();
    const second=date.getSeconds();
    clock.innerText=`${hour<10 ? `0${hour}`:hour}:${min<10 ? `0${min}`:min}:${second<10 ? `0${second}`:second}`;
}


//실행화면
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();

