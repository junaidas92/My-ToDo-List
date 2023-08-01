const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list");

button.addEventListener("click", addToDo);
todolist.addEventListener("click", deleteToDo)

function addToDo(event) {
    event.preventDefault();
    
    //console.log(input.value);
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo-container");

    const todoitem = document.createElement("li");
    todoitem.classList.add("todo-item");
    todoitem.innerText = input.value;
    tododiv.appendChild(todoitem);

    const deletebutton = document.createElement("button");
    deletebutton.classList.add("delete-btn");
    deletebutton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    tododiv.appendChild(deletebutton);

    const completebutton = document.createElement("button");
    completebutton.classList.add("complete-btn");
    completebutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    tododiv.appendChild(completebutton);

    todolist.appendChild(tododiv);
    input.value = "";
}

function deleteToDo(event) {
    console.log(event.target);

    const item = event.target;
    //console.log(item);
    if(item.classList[0] === "delete-btn"){
       const delItem = item.parentElement;
       delItem.remove();
    }
    if(item.classList[0] === "complete-btn"){
        const delItem = item.parentElement;
        delItem.classList.toggle("completed");
     }
}