let eye = document.querySelector(".rasm")
let k=true
let pass = document.querySelector("#password")
eye.addEventListener('click', ()=>{
    if(k==true){
        eye.src="img/eye.png"
        k=false
        pass.type='text'
    }
    else{
        eye.src="img/eye-x.png"
        k=true
        pass.type='password'
    }
    
})

let img=document.querySelector(".img")
let p=document.querySelector(".forgot")
let m=true
p.addEventListener('click',()=>{
    if(m==true){
        img.style.display='none'
        m=false
    }
    else{
        img.style.display='block'
        m=true
    }
})