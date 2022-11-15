

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
    setItemToLS(localTasks)

    let lastObjectInArray = localTasks[localTasks.length - 1]
    
    console.log(localTasks)
    console.log(localTasks.length)
    console.log(lastObjectInArray)

    createStructure(lastObjectInArray)
    
})

/* Load tasks form localstorage */

if(localTasks.length > 0){

    localTasks.forEach(function(oneUser){
        createStructure(oneUser)
    })
    
}else{
    
}

let lastObjectInArray = localTasks[localTasks.length - 1]

let whatId = lastObjectInArray.id


localTasks.find(function(element){
    if(whatId === element.id){
        console.log(element.taskText)
    }
})

localTasks.find(function(element){
    if(element.id === whatId){
        console.log(element)
    }
})

