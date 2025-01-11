
let chosen = document.querySelector('.chosen')
let value = JSON.parse(localStorage.getItem('products'))
let p = document.createElement('p')
p.textContent = JSON.parse(localStorage.getItem('products')).length
// localStorage.removeItem('products')



    for(let i = 0; i<=p.textContent-2;i++){
        let div = document.createElement('div')
        div.classList.add('rasm')
        chosen.appendChild(div)
     
        div.textContent = i+1
        div.addEventListener('click', ()=>{
            div.style.backgroundImage = `url(..//img/${value[i]['img']})`
            console.log(div)
            div.textContent = ' '
            let img = document.createElement('img')
            img.classList.add('piacher')
            img.src = `../img/${value[i]['img']}`
            div.appendChild(img)
        })
    }





let clear = document.querySelector('.CLEAR')

clear.addEventListener('click',()=>{
    chosen.style.display = 'none'
    localStorage.removeItem('products')
    localStorage.setItem('products', JSON.stringify())
})