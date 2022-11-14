



let taskWrapper = document.querySelector(".taskWrapper")

let deleteAll = document.querySelector(".deleteAll")

let todoInput = document.querySelector(".todoInput")

let tasks = getLS()




    



todoInput.addEventListener("submit", function(e){
    e.preventDefault()

    let valueOfInput = e.target.elements.textInput.value
    
    let pushToArray = {
        taskText: valueOfInput,
        completion: false,
        id: uuidv4(),
    }

    tasks.push(pushToArray)
    setItemToLS(tasks)

    createTask(tasks)



    e.target.elements.textInput.value = ""


    let rightImg = document.querySelector(".rightImg")
    let checkbox = document.querySelector(".checkbox")
    let checkIcon = document.querySelector(".checkIcon")
    let settingsIcon = document.querySelector(".settingsIcon")
    let settingWrapper = document.querySelector(".settingWrapper")


    settingsIcon.addEventListener("click", function(e){

        let styleOfSettingWrapper = getComputedStyle(settingWrapper)
        
        if(styleOfSettingWrapper.display === "none"){
            settingWrapper.style.display = "flex"
        }else{
            settingWrapper.style.display = "none"
        }

    })

    taskWrapper.addEventListener("mouseover", function(e){
        rightImg.style.display = "flex"
    
    })
    
    taskWrapper.addEventListener("mouseout", function(e){
        rightImg.style.display = "none"
        settingWrapper.style.display = "none"

    
    })
    
    
    
    checkbox.addEventListener("click", function(){
    
        let styleOfcheckIcon = getComputedStyle(checkIcon)
        
        if(styleOfcheckIcon.display === "none"){
           return checkIcon.style.display = "block"
        }else{
            return checkIcon.style.display = "none"
        }
        
        })

})



console.log(tasks.length)



    
    


