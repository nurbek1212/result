let d = 0;
function trans(){
    let rand = Math.floor(Math.random()*361)
    d += rand;
    let ran = document.querySelector(".but")

     d= d + 360;
    ran.style.transform = `rotate(${d}deg)`
}