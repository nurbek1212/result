
let letters = document.querySelector('.latter')
let main = document.querySelector('.main')
let matn = 'ABCDEFGHIJKLMNPQRTWXYZJDJAD'
let audio1 = new Audio('audio/1.mp3')
let audio2 = new Audio('audio/6.mp3')
let score = document.querySelector('.score')
let cnt = 0
let measurement = matn.length
let show =  document.querySelector('.scrol')
console.log(measurement)
window.addEventListener('keypress',(e)=>{
    show.textContent = e.key.toUpperCase()
    if(e.key == 'Enter'){
        show.textContent = null

        setInterval(function(){
            let span = document.createElement('span')
            span.textContent = matn[0]
            matn = matn.slice(1)
    
            let rand = Math.floor(Math.random()*main.offsetWidth)
            span.style.transform = `translateX(${rand}px)`
    
            main.appendChild(span)
           
            measurement -= 1

            letters.textContent = `Harflar qoldi: ${measurement}ta`
            setTimeout(() => {
                show.style.display = 'block'
            }, 5000);
            if(measurement <= 0){
                measurement= null
    
                if(measurement= -1){
                
                    audio2.play()
                    measurement = measurement+2
                    audio2.autofocus()
                    
                }
            }
        },800)
              
    }
   
    else{
        document.querySelectorAll('.main span').forEach(item=>{
            if(item.textContent == e.key.toUpperCase()){
                item.textContent = '💥'
                audio1.currentTime = 0
                audio1.play()
                cnt ++
                score.textContent = `Tog'ri: ${cnt}ta`
            }
            
        })

    }
})

