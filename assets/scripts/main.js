

let todoInput = document.querySelector(".todoInput")
let taskWrapper = document.querySelector(".taskWrapper")


let localTasks = getLS()


todoInput.addEventListener("submit", function(e){

    e.preventDefault()


    let inputValue = e.target.elements.textInput.value

    let taskObject = {
        id: uuidv4(),
        taskText: inputValue,
        check: false,
    }
    
    localTasks.push(taskObject)
    createStructure(taskObject)
    setItemToLS(localTasks)

    checkboxFunctionSubmit(taskObject)

    e.target.elements.textInput.value = ""

    
    
})

/* Load tasks form localstorage */

if(localTasks.length > 0){

    localTasks.forEach(function(oneTask){
        createStructure(oneTask)
    })

    checkboxFunctionLoad()
    
}else{
    console.log("LocalStorage je prázdny")
}











