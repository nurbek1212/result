const variant  = Math.floor(Math.random()*9)+1
let ball = 1
function enter_peper1() {
    let peper = document.querySelector(".peper-1")
    if (variant == 1){
        peper.src = "img/1.jpg"
        alert(ball)
    } else {
        peper.scr = "img/2.gif"
        ball++
    }
    
}