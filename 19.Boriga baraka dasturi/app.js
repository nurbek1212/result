let taomlar = [
    'Telivizor',
    'Velosiped',
    'Skuter',
    'so`m',
    'Quti',
    'Gugurt',
    'Mashina',
    'Kamputer',
    'Damas',
    'Salfetka',
    'Skuter',
    'Olma',
    'Kiryuvish',
    'Qalam',
    'Ruchka',
    'Pecheniya',
    'Daftar',
    'Non',
    'Sichqoncha',
    'Klaviatura',
    'Telefon',
    'Mebel',
    'Fleshka',
    'Uy',
]
for(let i=1; i<=100; i++){
    let rand1 = Math.floor(Math.random()*100)%24
    let rand2 = Math.floor(Math.random()*100)%24
    // item.textContent = taomlar[index]
    let t = taomlar[rand1]
    taomlar[rand1] = taomlar[rand2]
    taomlar[rand2] = t
}

        // conole.log(i)  
document.querySelectorAll('.boriga').forEach((item,index)=>{
    item.addEventListener('click',()=>{
        item.style.transform = 'rotateY(180deg)'
        setTimeout(function(){
            item.style.background = 'none'
            item.textContent = taomlar[index]
            item.style.transform = 'rotateY(0deg)'
        },500)
    })
})
window.addEventListener('keypress',(e)=>{
    if(e.key == 'q'){
        let a = document.querySelector('.boriga:nth-child(1)')
        a.textContent = taomlar[0]
        a.style.background = 'none'
    }
    if(e.key == 'w'){
        let a = document.querySelector('.boriga:nth-child(2)')
        a.textContent = taomlar[1]
        a.style.background = 'none'
    }
    if(e.key == 'e'){
        let a = document.querySelector('.boriga:nth-child(3)')
        a.textContent = taomlar[2]
        a.style.background = 'none'
    }
    if(e.key == 'r'){
        let a = document.querySelector('.boriga:nth-child(4)')
        a.textContent = taomlar[3]
        a.style.background = 'none'
    }
    if(e.key == 't'){
        let a = document.querySelector('.boriga:nth-child(5)')
        a.textContent = taomlar[4]
        a.style.background = 'none'
    }
    if(e.key == 'y'){
        let a = document.querySelector('.boriga:nth-child(6)')
        a.textContent = taomlar[5]
        a.style.background = 'none'
    }
    if(e.key == 'u'){
        let a = document.querySelector('.boriga:nth-child(7)')
        a.textContent = taomlar[6]
        a.style.background = 'none'
    }
    if(e.key == 'i'){
        let a = document.querySelector('.boriga:nth-child(8)')
        a.textContent = taomlar[7]
        a.style.background = 'none'
    }
    if(e.key == 'a'){
        let a = document.querySelector('.boriga:nth-child(9)')
        a.textContent = taomlar[8]
        a.style.background = 'none'
    }
    if(e.key == 's'){
        let a = document.querySelector('.boriga:nth-child(10)')
        a.textContent = taomlar[9]
        a.style.background = 'none'
    }
    if(e.key == 'd'){
        let a = document.querySelector('.boriga:nth-child(11)')
        a.textContent = taomlar[10]
        a.style.background = 'none'
    }
    if(e.key == 'f'){
        let a = document.querySelector('.boriga:nth-child(12)')
        a.textContent = taomlar[11]
        a.style.background = 'none'
    }
    if(e.key == 'g'){
        let a = document.querySelector('.boriga:nth-child(13)')
        a.textContent = taomlar[12]
        a.style.background = 'none'
    }
    if(e.key == 'h'){
        let a = document.querySelector('.boriga:nth-child(14)')
        a.textContent = taomlar[13]
        a.style.background = 'none'
    }
    if(e.key == 'j'){
        let a = document.querySelector('.boriga:nth-child(15)')
        a.textContent = taomlar[14]
        a.style.background = 'none'
    }
    if(e.key == 'k'){
        let a = document.querySelector('.boriga:nth-child(16)')
        a.textContent = taomlar[15]
        a.style.background = 'none'
    }
    if(e.key == 'l'){
        let a = document.querySelector('.boriga:nth-child(17)')
        a.textContent = taomlar[16]
        a.style.background = 'none'
    }
    if(e.key == 'z'){
        let a = document.querySelector('.boriga:nth-child(18)')
        a.textContent = taomlar[17]
        a.style.background = 'none'
    }
    if(e.key == 'x'){
        let a = document.querySelector('.boriga:nth-child(19)')
        a.textContent = taomlar[18]
        a.style.background = 'none'
    }
    if(e.key == 'c'){
        let a = document.querySelector('.boriga:nth-child(20)')
        a.textContent = taomlar[19]
        a.style.background = 'none'
    }
    if(e.key == 'v'){
        let a = document.querySelector('.boriga:nth-child(21)')
        a.textContent = taomlar[20]
        a.style.background = 'none'
    }
    if(e.key == 'b'){
        let a = document.querySelector('.boriga:nth-child(22)')
        a.textContent = taomlar[21]
        a.style.background = 'none'
    }
    if(e.key == 'n'){
        let a = document.querySelector('.boriga:nth-child(23)')
        a.textContent = taomlar[22]
        a.style.background = 'none'
    }
    if(e.key == 'm'){
        let a = document.querySelector('.boriga:nth-child(24)')
        a.textContent = taomlar[23]
        a.style.background = 'none'
    }
    
})