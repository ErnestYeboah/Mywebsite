const imageBox = document.getElementById("img21")
const boxOne = document.getElementById("box1")
const boxTwo = document.getElementById("box2")
const boxThree = document.getElementById("box3")
const boxFour = document.getElementById("box4")
const boxFive = document.getElementById("box5")
const boxSix = document.getElementById("box6")
const boxSeven = document.getElementById("box7")
const boxEight = document.getElementById("box8")
const boxNine = document.getElementById("box9")
const boxTen = document.getElementById("box10")


const IMAGES = [
     "Gaming/1668518160307.jpg",
     "Gaming/1663685294650.jpg",
     "Gaming/1663685280091.jpg",
     "Gaming/1658919666245.jpg",
     "Gaming/1659251864766.jpg",
     "Gaming/1659251867960.jpg",
     "Gaming/1660142390075.jpg",
     "Gaming/1661166504480.jpg",
     "Gaming/1662778922040.jpg",
     "Gaming/1663354584407.jpg"
  ]
  
boxOne.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[0]}">`
})

boxTwo.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[1]}">`
})

boxThree.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[2]}">`
})

boxFour.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[3]}">`
})

boxFive.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[4]}">`
})

boxSix.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[5]}">`
})

boxSeven.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[6]}">`
})

boxEight.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[7]}">`
})

boxNine.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[8]}">`
})

boxTen.addEventListener("click", function(){
  imageBox.innerHTML = `<img src="${IMAGES[9]}">`
})