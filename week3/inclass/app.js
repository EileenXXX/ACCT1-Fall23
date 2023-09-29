let firstsection = document.getElementById("sectionone")
let firstImage = document.getElementById("specialImage")
let buttonChangeColor = document.getElementById("colorChangeBTN")
let buttonGencolor = document.getElementById("colorGenBTN")
let buttonimageChange = document.getElementById("imageChangeBTN")
let buttonAddText = document.getElementById("addTextBTN")

console.log(firstsection)

let changeColor = function(){
    firstsection.style.backgroundColor = "rgb(170, 250, 170)"
}

let generateColor = function(){
    let redComp = Math.random()*255
    let greenComp = Math.random()*255
    let blueComp = Math.random()*255
    firstsection.style.backgroundColor = "rgb("+redComp+", "+greenComp+", "+blueComp+")"

}

let changeImage = function(){
    firstImage.classList.toggle("image-2")
    console.log(firstImage.classList[0])
    if(firstImage.classList[0]=="image-2"){
        firstImage.src="maxresdefault.jpg"
    }
    else{
        firstImage.src="capyalbino.jpg"
    }
}

let addText = function(){
    let myParag = document.createElement("p")
    myParag.innerText = "Hello, this is an albino capybara"
    myParag.style.fontWeight = "bolder"
    firstsection.appendChild(myParag)
}

// Fat arrow function
// let changeColor = function(){
// }

firstsection.style.backgroundColor = "rgb(250,170,170)"

buttonChangeColor.addEventListener("click",changeColor)
buttonGencolor.addEventListener("click",generateColor)
buttonimageChange.addEventListener("click", changeImage)
buttonAddText.addEventListener("click",addText)