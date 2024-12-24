function run(e){
    alert(e.key)
    let laptop = document.querySelector('.laptop')
    if(e.key == 'Enter'){
        laptop.textContent = ''
    }else if(e.key == 'ArrowLeft'){
        laptop.style.textAlign  = 'left'
    }else if(e.key == 'ArrowRight'){
        laptop.style.textAlign  = 'right'
    }else if(e.keyCode == 32){
        laptop.style.textAlign = 'center'
    }else{
        laptop.textContent += e.key
    }
}
window.addEventListener('keydown', run)