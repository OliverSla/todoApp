
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

/* Checkbox */

let checkboxFunctionLoad = function(){

    let checkbox = document.querySelectorAll(".checkbox")

    checkbox.forEach(function(oneTask){
        oneTask.addEventListener("click", function(){
           let idOfObject =  oneTask.children[0].id
           console.log(oneTask.children[0].id)
    
           const indexOfTask = localTasks.findIndex( (taskas) => taskas.id === idOfObject)

    
           if(localTasks[indexOfTask].check == false){
            localTasks[indexOfTask].check = true
            oneTask.children[0].classList = "checkIcon check"
            
           }else{
            localTasks[indexOfTask].check = false
            oneTask.children[0].classList = "checkIcon uncheck"
           }

           setTodosToLS(localTasks)

        })
        
    })

}

/* Checkbox - in submit */

let checkboxFunctionSubmit = function(idTaskSubmit){

    let indexOfTaskInInput = localTasks.findIndex(function(task){
        return task.id === idTaskSubmit.id
    })
    
    let checkbox = document.querySelectorAll(".checkbox")
    
    checkbox[indexOfTaskInInput].addEventListener("click", function(){
           let idOfObject =  checkbox[indexOfTaskInInput].children[0].id

           const indexOfTask = localTasks.findIndex( (task) => task.id === idOfObject)

           if(localTasks[indexOfTask].check == false){
            localTasks[indexOfTask].check = true
            checkbox[indexOfTaskInInput].children[0].classList = "checkIcon check"  
           }else{
            localTasks[indexOfTask].check = false
            checkbox[indexOfTaskInInput].children[0].classList = "checkIcon uncheck"
           }
    
           setTodosToLS(localTasks)
           
        })

}

/* After click on icon show settings */

let showSettingOnSubmit = function(idTaskSubmit){

    let settingsIcon = document.querySelectorAll(".settingsIcon")
    let settingBlock = document.querySelectorAll(".settingBlock")
    let settingIconImg = document.querySelectorAll(".settingIconImg")
    let cancelIconImg = document.querySelectorAll(".cancelIconImg")
    let editTask = document.querySelectorAll(".editTask")
    let duplicateTask = document.querySelectorAll(".duplicateTask")
    let deleteTask = document.querySelectorAll(".deleteTask")
    let tasks = document.querySelectorAll(".tasks")

    let indexOfTaskInInput = localTasks.findIndex(function(task){
        return task.id === idTaskSubmit.id
    })
    
         settingsIcon[indexOfTaskInInput].addEventListener("click", function(e){


            let idOfObject = settingsIcon[indexOfTaskInInput].parentElement.parentElement.id
    
            const indexOfTask = localTasks.findIndex( (task) => task.id === idOfObject)
            
            let getStyleOfSettingBlock = getComputedStyle(settingBlock[indexOfTask])   
    
            if(getStyleOfSettingBlock.display === "none"){
                settingBlock[indexOfTask].style.display = "flex"
                settingIconImg[indexOfTask].style.display = "none"
                cancelIconImg[indexOfTask].style.display = "flex"
                
            }else{
                settingBlock[indexOfTask].style.display = "none"
                settingIconImg[indexOfTask].style.display = "flex"
                cancelIconImg[indexOfTask].style.display = "none"
            }

            deleteTask[indexOfTask].addEventListener("click", function(e){


                localTasks.splice(indexOfTask, 1)
                tasks[indexOfTask].remove()
                setTodosToLS(localTasks)

            })
    
        })
        

}


let showSetting = function(){

    let settingsIcon = document.querySelectorAll(".settingsIcon")
    let settingBlock = document.querySelectorAll(".settingBlock")
    let settingIconImg = document.querySelectorAll(".settingIconImg")
    let cancelIconImg = document.querySelectorAll(".cancelIconImg")
    let editTask = document.querySelectorAll(".editTask")
    let duplicateTask = document.querySelectorAll(".duplicateTask")
    let deleteTask = document.querySelectorAll(".deleteTask")
    let tasks = document.querySelectorAll(".tasks")

    settingsIcon.forEach(function(oneTask){
    
        oneTask.addEventListener("click", function(e){
    
            let idOfObject = oneTask.parentElement.parentElement.id

            let localTasks = getLS()
            
            setTodosToLS(localTasks)

            
            const indexOfTask = localTasks.findIndex( (task) => task.id === idOfObject)

            console.log(localTasks[indexOfTask])

            let getStyleOfSettingBlock = getComputedStyle(settingBlock[indexOfTask])   
    
            if(getStyleOfSettingBlock.display === "none"){
                settingBlock[indexOfTask].style.display = "flex"
                settingIconImg[indexOfTask].style.display = "none"
                cancelIconImg[indexOfTask].style.display = "flex"
                
            }else{
                settingBlock[indexOfTask].style.display = "none"
                settingIconImg[indexOfTask].style.display = "flex"
                cancelIconImg[indexOfTask].style.display = "none"
            }

            setTodosToLS(localTasks)

            editTask[indexOfTask].addEventListener("click", function(e){
                console.log(editTask[indexOfTask])
            })

            duplicateTask[indexOfTask].addEventListener("click", function(e){
                console.log(duplicateTask[indexOfTask])
            })

            deleteTask[indexOfTask].addEventListener("click", function(e){


                console.log(oneTask.parentElement.parentElement.id)

                tasks[indexOfTask].remove()
                localTasks.splice(indexOfTask, 1)
            })
    
        })
        
    })


}

  
/* Create structure of todo */


let createStructure = function(object){

    let taskDiv = document.createElement("div")
    taskDiv.className = "tasks"

    let chechOrNot = ""

    if(object.check === false){
       chechOrNot = "uncheck"
    }else{
        chechOrNot = "check"
    }

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

    taskWrapper.appendChild(taskDiv)
}









