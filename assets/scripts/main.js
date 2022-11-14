


let checkbox = document.querySelector(".checkbox")
let checkIcon = document.querySelector(".checkIcon")
let taskWrapper = document.querySelector(".taskWrapper")
let rightImg = document.querySelector(".rightImg")
let settingsIcon = document.querySelector(".settingsIcon")
let settingBlock = document.querySelector(".settingBlock")
let settingWrapper = document.querySelector(".settingWrapper")

let deleteAll = document.querySelector(".deleteAll")

let settingIconImg = document.querySelector(".settingIconImg")
let cancelIconImg = document.querySelector(".cancelIconImg")

let todoInput = document.querySelector(".todoInput")

let tasks = getLS()


/*
CHECK BOX 
*/
checkbox.addEventListener("click", function(){

let styleOfcheckIcon = getComputedStyle(checkIcon)

if(styleOfcheckIcon.display === "none"){
   return checkIcon.style.display = "block"
}else{
    return checkIcon.style.display = "none"
}

})

/*
If hover show setting icon
*/
taskWrapper.addEventListener("mouseover", function(e){
    rightImg.style.display = "flex"

})

taskWrapper.addEventListener("mouseout", function(e){
    rightImg.style.display = "none"

})



/*
If click setting icon show settings
*/

settingsIcon.addEventListener("click", function(e){

    let styleOfsettingWrapper = getComputedStyle(settingWrapper)
    let styleOfSettingIcon = getComputedStyle(settingIconImg)

    if(styleOfsettingWrapper.display === "none"){
      settingWrapper.style.display = "flex"
    }else{
       settingWrapper.style.display = "none"
    }

    if(styleOfSettingIcon.display === "flex"){
        settingIconImg.style.display = "none"
        cancelIconImg.style.display = "flex"
    }else{
        settingIconImg.style.display = "flex"
        cancelIconImg.style.display = "none"
    }

})

/*
Delete All Todos
*/


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
    
    console.log(tasks)

    e.target.elements.textInput.value = ""

})






