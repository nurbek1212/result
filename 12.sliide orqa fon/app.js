let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let slides = document.querySelector(".slides")

let d = 0
let b = 0
next.addEventListener('click', ()=>{
    d += 25
    if(d>75){
        d = 0
    }
    slides.style.transform = `translateX(${-d}%)`
})
prev.addEventListener('click', ()=>{
    d -= 25
    if(d<0){
        d = 75
    }
    slides.style.transform = `translateX(${-d}%)`
})
let small_slides = document.querySelector(".small_slides")
next.addEventListener('click', ()=>{
    b += 25
    if(b>75){
        b = 0
    }
    small_slides.style.transform = `translateX(${-b}%)`
})
prev.addEventListener('click', ()=>{
    b -= 25
    if(d<0){
        b = 75
    }
    small_slides.style.transform = `translateX(${-b}%)`
})
