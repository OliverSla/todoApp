

let getLS = function(){
    if(localStorage.getItem("task") !== null){
        let toString = localStorage.getItem("task")
        toResult = JSON.parse(toString)
        return toResult
    }else{
        return []
    }
}

let setItemToLS = function(toSave){
    let toString = JSON.stringify(toSave)
    localStorage.setItem("task", toString )
}


let createTask = function(oneUser){
    let tasks = document.createElement("div")
    tasks.className = "tasks"
    taskWrapper.appendChild(tasks)

    let task = document.createElement("label")
    task.className = "task"
    tasks.appendChild(task)

    let checkbox = document.createElement("div")
    checkbox.className = "checkbox"
    task.appendChild(checkbox)

    let checkIcon = document.createElement("img")
    checkIcon.className = "checkIcon"
    checkIcon.src = "./assets/img/check.svg"
    checkbox.appendChild(checkIcon)

    let taskText = document.createElement("span")
    taskText.className = "taskText"
    taskText.textContent = oneUser.taskText
    task.appendChild(taskText)

    let rightImg = document.createElement("div")
    rightImg.className = "rightImg"
    tasks.appendChild(rightImg)

    let settingsIcon = document.createElement("span")
    settingsIcon.className = "settingsIcon"
    rightImg.appendChild(settingsIcon)

    let settingIconImg = document.createElement("img")
    settingIconImg.className = "settingIconImg"
    settingIconImg.src = "./assets/img/more.svg"
    settingsIcon.appendChild(settingIconImg)

    let cancelIconImg = document.createElement("img")
    cancelIconImg.className = "cancelIconImg"
    cancelIconImg.src = "./assets/img/cancel.svg"
    settingsIcon.appendChild(cancelIconImg)

    let settingWrapper = document.createElement("div")
    settingWrapper.className = "settingWrapper"
    tasks.appendChild(settingWrapper)

    let settingBlock = document.createElement("ul")
    settingBlock.className = "settingBlock"
    settingWrapper.appendChild(settingBlock)

    let editTask = document.createElement("li")
    editTask.className = "editTask"
    settingBlock.appendChild(editTask)

    let iconEdit = document.createElement("img")
    iconEdit.className = "iconEdit"
    iconEdit.src = "./assets/img/edit.svg"
    editTask.appendChild(iconEdit)

    let settingTextEdit = document.createElement("span")
    settingTextEdit.className = "settingTextEdit"
    settingTextEdit.textContent = "Edit"
    editTask.appendChild(settingTextEdit)



    let duplicateTask = document.createElement("li")
    duplicateTask.className = "duplicateTask"
    settingBlock.appendChild(duplicateTask)

    let iconDuplicate = document.createElement("img")
    iconDuplicate.className = "iconDuplicate"
    iconDuplicate.src = "./assets/img/duplicate.svg"
    duplicateTask.appendChild(iconDuplicate)

    let settingTextDuplicate = document.createElement("span")
    settingTextDuplicate.className = "settingTextDuplicate"
    settingTextDuplicate.textContent = "Duplicate"
    duplicateTask.appendChild(settingTextDuplicate)


    let deleteTask = document.createElement("li")
    deleteTask.className = "deleteTask"
    settingBlock.appendChild(deleteTask)

    let deleteIcon = document.createElement("img")
    deleteIcon.className = "deleteIcon"
    deleteIcon.src = "./assets/img/delete.svg"
    deleteTask.appendChild(deleteIcon)

    let settingTextDelete = document.createElement("span")
    settingTextDelete.className = "settingTextDelete"
    settingTextDelete.textContent = "Delete"
    deleteTask.appendChild(settingTextDelete)

    


}
