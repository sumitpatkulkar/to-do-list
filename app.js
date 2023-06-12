const newTask = document.getElementById("new-task")
// console.log(newTask.innerText);
function add() {
    if(document.getElementById("new-task").value === "") {
        alert("Enter something to add")
    }
    else {
        const ul = document.getElementById("task-list");
        // ul.innerHTML = "<li>"+bottom-btn+"</li>"
        let li = document.createElement("li");
        li.setAttribute("id","task")
    
        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("class", "checkbox")
        checkbox.setAttribute("onclick", "isChecked(event)")
        li.appendChild(checkbox)
    
        let input = document.createElement("input")
        input.setAttribute("value", newTask.value)
        input.setAttribute("class", "input")
        // input.value=newTask
        li.appendChild(input)
        
        let deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "delete")
        // deleteBtn.setAttribute("class", "bottom-btn")
        deleteBtn.setAttribute("onclick", "deleteLi(event)")
        deleteBtn.innerHTML = "Delete"
        li.appendChild(deleteBtn)
    
        ul.appendChild(li)
        document.getElementById("new-task").value=""
    }
    
}

const addBtn = document.getElementById("add")
addBtn.onclick = () => {
    // console.log(newTask.value);
    add();
}

function deleteLi(e) {
    e.target.parentNode.remove();         
}

// const clearAll = document.getElementById("clear-all").
 function clearAll() {
    const ul = document.getElementById("task-list");
    ul.innerHTML=""
}

// let checked = document.querySelectorAll(".checkbox")
function isChecked(e){
    // e.target.parentNode.style.textDecoration  = "line-through"; 
    if(e.target.checked)  {
        // console.log(e.target.parentNode)  
        let ipt = e.target.parentNode
        let scndChld = ipt.childNodes[1];
        // console.log(scndChld);
        scndChld.style.textDecoration  = "line-through";
    }
    else {
        let ipt = e.target.parentNode
        let scndChld = ipt.childNodes[1];
        // console.log(scndChld);
        scndChld.style.textDecoration  = "none";
    }
    
}

// let checked = document.querySelectorAll(".checkbox")
// checked.forEach(box => {
//     if(box.checked)
// })

