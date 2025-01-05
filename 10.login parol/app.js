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