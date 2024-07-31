const addBtn = document.querySelector('#add-btn')
const tasksDiv = document.querySelector('#tasks-div')
const eraseBtns = document.querySelectorAll('.erase-task');

//Evnet listner add new task when user presses a enter key
window.addEventListener('keyup', (e)=>{
    if(e.key=="Enter") addNewTask();
});

//Evnet listner add new task when user presses a add button
addBtn.addEventListener('click', addNewTask);


// function which adds new task
function addNewTask(){
    
        // Read user task from input field
        let taskContent = document.getElementById('input').value;

        // if input is empty alert user
        if(!taskContent){
            alert("plz enter task");
            return;
        }

        //Create new task
        let newTask = document.createElement('div');
        newTask.innerHTML = `
        <input type="checkbox">
        <p class="overflow-scroll mr-8 task-content">${taskContent}</p>
        <i class="fa-solid fa-xmark" id="x"></i>
        `
       
        // include current task in task div
        newTask.classList.add('task');
        tasksDiv.appendChild(newTask);
        
        //Add event listner on each cross mark 
        newTask.getElementsByTagName("i")[0].addEventListener('click', removeTask)
        
        //Add event listner on each checkbox
        newTask.getElementsByTagName('input')[0].addEventListener('click', showGlow)

        //Once the task is added clear input field
        document.getElementById('input').value = "";
    }

// function to remove a clicked task
function removeTask(e){
    if(e.target.id == "x")
    tasksDiv.removeChild(e.target.parentNode)
}

//add event listner on clear all button to clear the task div
document.getElementById('clear-all').addEventListener('click', (e)=>{
    tasksDiv.innerHTML = "";
})


//function to add glowness on task div if the task is checked with value true
function showGlow(e){

    if(e.target.checked)
        e.target.parentNode.classList.add('task-with-shadow');
    else
         e.target.parentNode.classList.remove('task-with-shadow');
}