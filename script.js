const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

//function to add task
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value =''//clearing the input field
    saveData()
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
 },false)

 // Function to save Data
 function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
 }

//Function to gett data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()