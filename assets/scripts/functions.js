
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

/* Set localStorage todos */

let setTodosToLS = function(toSave){
    let toString = JSON.stringify(toSave)
    localStorage.setItem("task", toString )
}
  
/* Create structure of todo */


let createStructure = function(object){

    let taskDiv = document.createElement("div")
    taskDiv.className = "tasks"

    // Checkbox

    let chechOrNot = ""

    if(object.check === false){
       chechOrNot = "uncheck"
    }else{
        chechOrNot = "check"
    }

    // Task Structure

    taskDiv.innerHTML = `

    <label id="${object.id}" class="task">
        <div class="checkbox"><img class="checkIcon ${chechOrNot} " src="./assets/img/check.svg" id="${object.id}"></div>
        <span class="taskText">${object.taskText}</span>

        <div class="rightImg "> 
        <span class="settingsIcon"> <img class="settingIconImg" src="./assets/img/more.svg" alt="" srcset=""><img class="cancelIconImg" src="./assets/img/cancel.svg" alt="" srcset=""></span>
    
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

    count()

    let idOfElement = taskDiv.children[0].id
    let indexOfTask = localTasks.findIndex( (task) => task.id === idOfElement)

    let checkboxTask = taskDiv.children[0].children[0]

    console.log()


    checkboxTask.addEventListener("click", function(e){


        if(localTasks[indexOfTask].check == false){
            localTasks[indexOfTask].check = true
            checkboxTask.children[0].classList = "checkIcon check"  
           }else{
            localTasks[indexOfTask].check = false
            checkboxTask.children[0].classList = "checkIcon uncheck"
           }
           setTodosToLS(localTasks)
    })
    
    


    let deleteTask = taskDiv.children[0].children[2].children[1].children[0].children[2]


    deleteTask.addEventListener("click", function(e){

        localTasks.splice(indexOfTask, 1)
        setTodosToLS(localTasks)

        let tasks = document.querySelectorAll(".tasks")
        tasks.forEach(function(oneTask){
            oneTask.remove()
        })
        localTasks.forEach(function(oneTask){
            createStructure(oneTask)
        })

        count()

    })

    taskWrapper.appendChild(taskDiv)

}



let count = function(){

    let taskRemain = document.querySelector(".taskRemain")

    let count1 = function(localTasks){
        if(localTasks.length !== undefined){
            return localTasks.length
        }else{
            return 0
        }
    }

    taskRemain.textContent = count1(localTasks)

}







