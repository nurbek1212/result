let but = document.querySelector(".randbuton")
but.addEventListener('click' , ()=>{
    let red = Math.random()*255
    let blak = Math.random()*255
    let blue = Math.random()*255
    but.style.backgroundColor = `rgb(${red} , ${blak} , ${blue})`
})