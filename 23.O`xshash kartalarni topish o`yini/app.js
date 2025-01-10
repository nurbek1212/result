let kartalar = [
    "img/dama-chitan.jpg",
    "img/dama-karyuch.jpg",
    "img/dama-olma.jpg",
    "img/dama-qorak.jpg",
    "img/karol-chitan.jpg",
    "img/karol-karyuch.jpg",
    "img/karol-olma.jpg",
    "img/karol-qorak.jpg",
    "img/valyet-chitan.jpg",
    "img/valyet-karuch.jpg",
    "img/valyet-olma.jpg",
    "img/valyet-qorak.jpg",
    "img/dama-chitan.jpg",
    "img/dama-karyuch.jpg",
    "img/dama-olma.jpg",
    "img/dama-qorak.jpg",
    "img/karol-chitan.jpg",
    "img/karol-karyuch.jpg",
    "img/karol-olma.jpg",
    "img/karol-qorak.jpg",
    "img/valyet-chitan.jpg",
    "img/valyet-karuch.jpg",
    "img/valyet-olma.jpg",
    "img/valyet-qorak.jpg"
];
let cards = document.querySelectorAll('.play')

for(let i = 0; i <=23; i++ ){
    cards[i].src = 'img/back.jpg'
}

window.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        for(let u= 0; u<=50;u++){
            let rand1  = Math.floor(Math.random()*100)%24
            let rand2  = Math.floor(Math.random()*100)%24
            let t = kartalar[rand1]
            kartalar[rand1]=kartalar[rand2]
            kartalar[rand2]= t
        }
        for(let i =0; i=23;i++){
            cards[i].src = 'img/back.jpg'
        }
    }
})
cnt = 0
secondcard = null
firstcard= null
cards.forEach((item,index) => {
    item.onclick = ()=>{
            cnt++
            item.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item.src  = kartalar[index]
                if(cnt == 1){
                    firstcard = item
                }else if(cnt==2){
                    secondcard =item
                }
            },300)
            
            setTimeout(function(){
                if(firstcard  != null && secondcard != null){
                    if(secondcard.src != firstcard && cnt == 2){
                    firstcard.src = "img/back.jpg"
                    secondcard.src = "img/back.jpg"
                        firstcard = null
                        secondcard = null
                        cnt = 0
                    }else{
                        cnt = 0
                        firstcard = null
                        secondcard = null
                    }
                }
            },700)
    }
    
});