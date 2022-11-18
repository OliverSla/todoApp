
/* Get localStorage todo list */

let getLS = function(){
    if(localStorage.getItem("task") !== null){
        let getTasks = localStorage.getItem("task")
        result = JSON.parse(getTasks)
        return result
    }else{
        return [] 
    }
}

/* Set localsotrage todos */

let setItemToLS = function(toSave){
    let toString = JSON.stringify(toSave)
    localStorage.setItem("task", toString )
}
  
/* Create structure of todo */

let createStructure = function(object){

    let taskDiv = document.createElement("div")
    taskDiv.className = "tasks"
    taskDiv.innerHTML = `

    <label for="${object.id}" class="task">
        <div class="checkbox"><img class="checkIcon" src="./assets/img/check.svg" id="${object.id}"></div>
        <span class="taskText">${object.taskText}</span>

        <div class="rightImg "> <span class="settingsIcon"> <img class="settingIconImg" src="./assets/img/more.svg" alt="" srcset=""><img class="cancelIconImg" src="./assets/img/cancel.svg" alt="" srcset=""></span>
    
        <div class="settingWrapper ">
            <ul class="settingBlock">
                <li class="editTask"><img class="iconEdit" src="./assets/img/edit.svg" alt="" srcset=""> <span class="settingText">Edit</span></li>
    
                <li class="duplicateTask"><img class="iconDuplicate" src="./assets/img/duplicate.svg" alt="" srcset=""> <span class="settingText">Duplicate</span></li>
    
                <li class="deleteTask"><img class="deleteIcon" src="./assets/img/delete.svg" alt="" srcset=""><span class="settingText">Delete</span></li>
            </ul>
        </div>
        </div>
    </label>
    `

    taskWrapper.appendChild(taskDiv)
    
}



 







