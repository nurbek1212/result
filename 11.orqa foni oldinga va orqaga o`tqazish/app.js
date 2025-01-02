let pruv = document.querySelector('.preuv')
let next = document.querySelector('.next')

let slides = document.querySelector('.slides')

let answer = document.querySelector('.answer')
cnt = 0
next.addEventListener('click', ()=>{
    cnt+=25
    if(cnt>75){
        cnt = 0
    }
    slides.style.transform = `translateX(${-cnt}%)`
    answer.style.transform = `translateX(${-cnt}%)`
})
pruv.addEventListener('click', ()=>{
    cnt-=25
    if(cnt<0){
        cnt = 75
    }
    slides.style.transform = `translateX(${-cnt}%)`
    answer.style.transform = `translateX(${-cnt}%)`
})