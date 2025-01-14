let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")

let header = document.querySelector(".header")
button1.addEventListener('click', ()=>{
    button1.style.backgroundColor = 'white'
    button2.style.backgroundColor = '#777'
    button3.style.backgroundColor = '#777'
    button4.style.backgroundColor = '#777'
    header.style.backgroundImage = 'url(img/bear.jpg)'
})
button2.addEventListener('click', ()=>{
    button1.style.backgroundColor = '#777'
    button2.style.backgroundColor = 'white'
    button3.style.backgroundColor = '#777'
    button4.style.backgroundColor = '#777'
    header.style.backgroundImage = 'url(img/bori.jpg)'
    h1.style.content = 'White'
})
button3.addEventListener('click', ()=>{
    button1.style.backgroundColor = '#777'
    button2.style.backgroundColor = '#777'
    button3.style.backgroundColor = 'white'
    button4.style.backgroundColor = '#777'
    header.style.backgroundImage = 'url(img/lion.jpg)'
    h1.style.content = 'White'
})
button4.addEventListener('click', ()=>{
    button1.style.backgroundColor = '#777'
    button2.style.backgroundColor = '#777'
    button3.style.backgroundColor = '#777'
    button4.style.backgroundColor = 'white'
    header.style.backgroundImage = 'url(img/tiger.jpg)'
    h1.style.content = 'White'
})