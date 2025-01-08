let addButton = document.querySelector('.add')
let clearButton = document.querySelector('.clear')
let message = document.querySelector('#message')
let productInput = document.querySelector('#productInput')
let productList = document.querySelector('#productList')
let mahsulotlar = []

addButton.onclick = () => {
    if(productInput.value == ''){
        habar('Mahsulot nomini kiritilmagan!')
    }
    else {
        mahsulotlar.push(productInput.value)    
        display(mahsulotlar)
        habar('Mahsulot qo`shildi')
    }
}       
function display(m){
    productList.innerHTML = ''
    m.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item
        productList.appendChild(li)
    })
}


clearButton.onclick = () => {
    habar('Barcha mahsulotlar o`chirildi')
    productList.innerHTML = '';
    
}   

function habar(xat){
    message.style.display = 'flex'
    message.textContent = xat
    setTimeout(function(){
        message.style.display = 'none'
    }, 2000)
}