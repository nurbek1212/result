let batton1 = document.querySelector("#batton1")
let batton2 = document.querySelector("#batton2")
let batton3 = document.querySelector("#batton3")
let batton4 = document.querySelector("#batton4")


let header = document.querySelector(".HEDER")

let text1 = document.querySelector(".heder-text h1")

batton1.addEventListener('click', ()=>{
    batton1.style.backgroundColor = 'white'
    batton2.style.backgroundColor = '#777'
    batton3.style.backgroundColor = '#777'
    batton4.style.backgroundColor = '#777'
    header.style.backgroundImage = 'url(img/bear.jpg)'
    text1.textContent = 'GROWN BEAR'
})

batton2.addEventListener('click', ()=>{
    batton1.style.backgroundColor = '#777'
    batton2.style.backgroundColor = 'white'
    batton3.style.backgroundColor = '#777'
    batton4.style.backgroundColor = '#777'
    header.style.backgroundImage = 'url(img/bori.jpg)'
    text1.textContent = 'Wolf Garden'
})  

batton3.addEventListener('click', ()=>{
    batton1.style.backgroundColor = '#777'
    batton2.style.backgroundColor = '#777'
    batton3.style.backgroundColor = 'white'
    batton4.style.backgroundColor = '#777'
    header.style.backgroundImage = 'url(img/lion.jpg)'
    text1.textContent = 'lion Garde'
})
batton4.addEventListener('click', ()=>{
    batton1.style.backgroundColor = '#777'
    batton2.style.backgroundColor = '#777'
    batton3.style.backgroundColor = '#777'
    batton4.style.backgroundColor = 'white'
    header.style.backgroundImage = 'url(img/tiger.jpg)'
    text1.textContent = 'Tiger Baer'
})