const ball=document.querySelector('.ball');
const container=document.querySelector('.container');

let ballSpeedX=4;
let ballSpeedY=4;

function moveball(){
    const ballrect = ball.getBoundingClientRect()
    const containerrect = container.getBoundingClientRect()
    if(ballrect.right >= containerrect.right || ballrect.left <= containerrect.left){
        ballSpeedX = -ballSpeedX
    }
    if(ballrect.bottom>=containerrect.bottom || ballrect.top <= containerrect.top){
        ballSpeedY = -ballSpeedY
    }
    ball.style.left = ball.offsetLeft + ballSpeedX + 'px'
    ball.style.top = ball.offsetTop + ballSpeedY + 'px'
    requestAnimationFrame(moveball)
}
moveball()