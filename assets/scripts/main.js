


let checkbox = document.querySelector(".checkbox")
let checkIcon = document.querySelector(".checkIcon")
let taskWrapper = document.querySelector(".taskWrapper")
let rightImg = document.querySelector(".rightImg")
let settingsIcon = document.querySelector(".settingsIcon")
let settingBlock = document.querySelector(".settingBlock")


settingsIcon.addEventListener("click", function(e){

    settingBlock.style.display = "flex"


})



checkbox.addEventListener("click", function(){

let styleOfcheckIcon = getComputedStyle(checkIcon)

if(styleOfcheckIcon.display === "none"){
   return checkIcon.style.display = "block"
}else{
    return checkIcon.style.display = "none"
}


})




taskWrapper.addEventListener("mouseover", function(e){
    rightImg.style.display = "flex"
})

taskWrapper.addEventListener("mouseout", function(e){
    rightImg.style.display = "none"
})

