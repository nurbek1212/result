
carx = 0
cary = 0
redx = 0
redy = 0 
function run(e){
    let  car = document.querySelector(".car-blue")
    switch(e.key){
        case 'ArrowRight':
            car.style.transform = `rotate(360deg)`
            carx += 10
            break ;
        case 'ArrowLeft':
            car.style.transform = `rotate(180deg)`
            carx -= 10
            break ;
         case 'ArrowUp':
            car.style.transform = `rotate(270deg)`
            cary -= 10
            break ;
         case 'ArrowDown':
            car.style.transform = `rotate(90deg)`
            cary += 10
            break ;
    }
    car.style.left = `${carx}px`
    car.style.top = `${cary}px`
}
window.addEventListener('keydown',run)
function ran(ey){
    let  red = document.querySelector(".car-red")
    switch(ey.key){
        case 'a':
            red.style.transform = `rotate(270deg)`
            redx -= 10
            break ;
        case 'd':
            red.style.transform = `rotate(90deg)`
            redx += 10
            break ;
        case 's':
            red.style.transform = `rotate(180deg)`
            redy += 10
            break ;
        case 'w':
            red.style.transform = `rotate(360deg)`
            redy -= 10
            break ;
    }
    red.style.left = `${redx}px`
    red.style.top = `${redy}px`
}
window.addEventListener('keydown',ran)
