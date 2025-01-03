let son1 = document.querySelector(".son1")
let oshirish = document.querySelector(".ans1")
let kamaytirish = document.querySelector(".ans2")
let contr = 1
oshirish.addEventListener('click' , ()=>{
    contr = contr + 1
    son1.textContent = contr

})
kamaytirish.addEventListener('click' , ()=>{
    contr = contr - 1
    son1.textContent = contr
    
})
  