let b = true
document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', ()=>{
        let span = item.querySelector('span')
        if(b){
            item.style.height ='300px'
            b = false
            span.textContent ='-'
        }
        else{
            item.style.height = '50px'
            b = true
            span.textContent ='+'
        }
    })
})