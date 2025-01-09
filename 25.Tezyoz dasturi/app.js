let lasttext = document.querySelector('.last-next')
let newtext = document.querySelector('.new-next')

newtext.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iure assumenda praesentium autem animi quae, tempora dolor. Inventore, corrupti eligendi. Deleniti cupiditate repudiandae voluptatem quisquam cumque placeat iste!'
let matn = newtext.textContent

let audio1  = new Audio('audio/2.wav')
let audio2  = new Audio('audio/1.mp3')
let audio6  = new Audio('audio/6.mp3')
let kalculator1 = document.querySelector('.kalculator1')
let kalculator2 = document.querySelector('.kalculator2')
cnt = 0
com  = 0
window.addEventListener('keypress', (e)=>{
    if(matn[0]== e.key){
        newtext.textContent = matn.slice(1)
        lasttext.textContent += matn[0]
        matn = matn.slice(1)
        audio1.currentTime = 0

        audio1.play()
    }
})