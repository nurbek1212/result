let left_scrol = document.querySelector('.left-scrol')
let right_scrol = document.querySelector('.right-scrol')
let left_rgb = document.querySelector('.left-rgb')
let right_rgb = document.querySelector('.right-rgb')
let photo_left = document.querySelector('.photo-left')
let photo_right = document.querySelector('.photo-right')
let k=0
let p=0
let n=0
let m=0
let d1=0
let d2=0
window.addEventListener('keypress', (e)=>{
    if(e.key == '1'){
        photo_left.src = 'img/qaychi1.jpg'
        n=1
        d1++
    }
    if(e.key == '2'){
        photo_left.src = 'img/qogoz1.jpg'
        n=2
        d1++
    }
    if(e.key == '3'){
        photo_left.src = 'img/tosh1.jpg'
        n=3
        d1++
    }
    if(e.key == 'q'){
        photo_right.src = 'img/qaychi2.jpg'
        m=1
        d2++
    }
    if(e.key == 'w'){
        photo_right.src = 'img/qogoz2.jpg'
        m=2
        d2++
    }
    if(e.key == 'e'){
        photo_right.src = 'img/tosh2.jpg'
        m=3
        d2++
    }
    if(d1==d2){
        left_rgb.style.display  = 'none'
        right_rgb.style.display  = 'none'
        setTimeout(()=>{
            left_rgb.style.display = 'flex'
            right_rgb.style.display = 'flex'
        },1100)
    }
    if(n==m && d1==d2){
        k+=0
        p+=0
        left_scrol.textContent = k
        right_scrol.textContent = p
    }
    else if(((n==1 && m==2)||(n==2 && m==3)||(n==3 && m==1))&& d1 == d2){
        p++
        left_scrol.textContent = p
    }
    else if(((m==1 && n==2)||(m==2 && n==3)||(m==3 && n==1))&& d1 == d2){
        k++
        right_scrol.textContent = k
    }   
    
})