


let checkbox = document.querySelector(".checkbox")
let checkIcon = document.querySelector(".checkIcon")
let taskWrapper = document.querySelector(".taskWrapper")
let rightImg = document.querySelector(".rightImg")
let settingsIcon = document.querySelector(".settingsIcon")
let settingBlock = document.querySelector(".settingBlock")
let settingWrapper = document.querySelector(".settingWrapper")




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
    settingWrapper.style.display = "flex"
})

settingBlock.addEventListener("mouseover", function(e){
    rightImg.style.display = "flex"
    settingWrapper.style.display = "flex"
})

settingWrapper.addEventListener("mouseout", function(e){
    settingWrapper.style.display = "none"
})

settingWrapper.addEventListener("mouseout", function(e){
    settingWrapper.style.display = "flex"
})



