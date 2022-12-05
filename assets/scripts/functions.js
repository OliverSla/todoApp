
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
    let lineThroughText = ""

    if(object.check === false){
       chechOrNot = "uncheck"
       lineThroughText = "lineThroughUncheck"
    }else{
        chechOrNot = "check"
        lineThroughText = "lineThroughCheck"
    }


    let indexOfObect = localTasks.indexOf(object)

    // Task Structure

    taskDiv.innerHTML = `

    <label id="${object.id}" class="task">
        <div class="checkbox"><img class="checkIcon ${chechOrNot} " src="./assets/img/check.svg" id="${object.id}"></div>
        
        <span class="taskText ${lineThroughText}">${object.taskText}</span>

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

    let appFooter = document.querySelector(".appFooter")
    appFooter.style.display = "flex"

    count()


    let idOfElement = taskDiv.children[0].id
    let indexOfTask = localTasks.findIndex( (task) => task.id === idOfElement)



    /* task checkbox*/

    let checkboxTask = taskDiv.children[0].children[0]
    let checkTextLine = taskDiv.children[0].children[1]

    checkboxTask.addEventListener("click", function(e){


        if(localTasks[indexOfTask].check == false){
            localTasks[indexOfTask].check = true
            checkboxTask.children[0].classList = "checkIcon check"
            checkTextLine.classList.add("lineThroughCheck")
            checkTextLine.classList.remove("lineThroughUncheck")
           }else{
            localTasks[indexOfTask].check = false
            checkboxTask.children[0].classList = "checkIcon uncheck"
            checkTextLine.classList.add("lineThroughUncheck")
            checkTextLine.classList.remove("lineThroughCheck")
           }
           setTodosToLS(localTasks)
    })





    /* Edit task */
    
    let editTask = taskDiv.children[0].children[2].children[1].children[0].children[0]

        editTask.addEventListener("click", function(e){

            localTasks = getLS()

            let textElement = taskDiv.children[0].children[1]
            let valueOfTask = localTasks[indexOfTask].taskText

            textElement.innerHTML = ""


            let inputEdit = document.createElement("input")
            inputEdit.classList.add("inputEdit")
            inputEdit.value = `${valueOfTask}`
            textElement.appendChild(inputEdit)

            let editButtonInInput = document.createElement("a")
            editButtonInInput.classList.add("editButtonInInput")
            editButtonInInput.textContent = "Submit"
            textElement.appendChild(editButtonInInput)


            editButtonInInput.addEventListener("click", function(e){

                localTasks[indexOfTask].taskText = inputEdit.value
                setTodosToLS(localTasks)

                let tasks = document.querySelectorAll(".tasks")
                 tasks.forEach(function(oneTask){
                     oneTask.remove()
                 })
                 localTasks.forEach(function(oneTask){
                     createStructure(oneTask)
                 })

            })


            inputEdit.addEventListener("keyup", function(e){
                if(e.key === "Enter"){
                    
                    localTasks[indexOfTask].taskText = inputEdit.value
                    setTodosToLS(localTasks)

                    let tasks = document.querySelectorAll(".tasks")
                     tasks.forEach(function(oneTask){
                         oneTask.remove()
                     })
                     localTasks.forEach(function(oneTask){
                         createStructure(oneTask)
                     })
                }

            })

            



        })




    /* Duplciate task */

    let duplicateTask = taskDiv.children[0].children[2].children[1].children[0].children[1]
    
    duplicateTask.addEventListener("click", function(e){
        
        let taskObjectDuplicate = {
            id: uuidv4(),
            taskText: taskDiv.children[0].children[1].textContent,
            check: false,
        }
    
        localTasks.splice(indexOfTask + 1, 0, taskObjectDuplicate )
        createStructure(taskObjectDuplicate)
        setTodosToLS(localTasks)

        let tasks = document.querySelectorAll(".tasks")
        tasks.forEach(function(oneTask){
            oneTask.remove()
        })
        localTasks.forEach(function(oneTask){
            createStructure(oneTask)
        })


    })

    /* Delete task */ 

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

        if(localTasks.length > 0){
            let appFooter = document.querySelector(".appFooter")
            appFooter.style.display = "flex"
        }else{
            let appFooter = document.querySelector(".appFooter")
            appFooter.style.display = "none"
        }

        count()

    })

    taskWrapper.appendChild(taskDiv)

}

/* Count tasks*/ 

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

/* Delete all tasks */

let deleteAllTasks = function(){

    let deleteAll = document.querySelector(".deleteAll")


    deleteAll.addEventListener("click", function(e){

        let appFooter = document.querySelector(".appFooter")
        appFooter.style.display = "none"

        let tasks = document.querySelectorAll(".tasks")
        tasks.forEach(function(oneTask){
            oneTask.remove()
        })

        localTasks = []
        setTodosToLS(localTasks)

        count()
    })




}


