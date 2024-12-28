rand1 = Math.floor(Math.random()*10)
rand2 = Math.floor(Math.random()*10)
qus = document.querySelector('.working')
qus.textContent = rand1 + '+' + rand2
n = 0
window.addEventListener('keypress', run)

function run(e){
    let ans = document.querySelector(".answer")
    if(e.keyCode== 32){
        ans.textContent= ' '
    }
    else if(!isNaN(e.key)){
        ans.textContent += e.key
    }
    else if(e.key == 'Enter'){
        n+=1
        let son = ans.textContent
        if(son == rand1+rand2){
            let res = document.querySelector(".right")
            let h4 = document.createElement("h4")
            h4.textContent = `${n}.✅`
            res.appendChild(h4)
        }else{
            let res = document.querySelector(".right")
            let h4 = document.createElement("h4")
            h4.textContent = `${n}.❌`
            res.appendChild(h4)
        }
        ans.textContent = ''

         rand1 = Math.floor(Math.random()*10)
         rand2 =Math.floor(Math.random()*10)
        qus.textContent = rand1 + '+'+rand2

    }
 
    
}



