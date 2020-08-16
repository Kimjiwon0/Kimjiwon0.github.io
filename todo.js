const toDoForm=document.querySelector(".todo"),
 toDoInput=toDoForm.querySelector("input"),
 toDoList=document.querySelector(".toDoList");


const TODOS_LS="toDos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
  }

function paintToDo(text){
    const li=document.createElement("li");
    const span=document.createElement("span");
    const delBtn=document.createElement("button");
    const newId= toDos.length+1;
    delBtn.innerText="❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText= text;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const toDoObj={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue= toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadToDos= localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(toDo) {
          paintToDo(toDo.text);  
        });
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();