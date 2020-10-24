//Query Selectors
const inputTodo=document.querySelector('.input');
const btnTodo=document.querySelector('.btn');
const listTodo=document.querySelector('.list');
const dateTodo=document.getElementById('date');

//Date 
const options={year: "numeric",
    month: "long",
    day: "numeric",};
const today=new Date();
dateTodo.innerHTML=today.toLocaleDateString("en-US",options);

//Function 
function addTodo(event){
    //Prevent from submitting
    event.preventDefault();
    //Create div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    const todoNew=document.createElement('li');
    todoNew.innerText=inputTodo.value;
    todoNew.classList.add('item');
    todoDiv.appendChild(todoNew);
    //Check btn
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
     //Remove btn
    const removeButton=document.createElement('button');
    removeButton.innerHTML='<i class="fas fa-trash"></i>'
    removeButton.classList.add('remove-btn');
    todoDiv.appendChild(removeButton);
    //Append to list
    listTodo.appendChild(todoDiv);
    //Clear todo input value
    inputTodo.value=""
}

function checkRemove(e){
    const item=e.target;
    //Remove the todo
    if(item.classList[0]==='remove-btn')
    {
        const todo=item.parentElement;
        //Animation 
        todo.classList.add('remove');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }
    //Check Mark
    if(item.classList[0]==='complete-btn')
    {
        const todo=item.parentElement;
        todo.classList.toggle('done');
    }
}

//Event Listeners
btnTodo.addEventListener("click",addTodo);
listTodo.addEventListener("click",checkRemove);

