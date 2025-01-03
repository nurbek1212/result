
let ans = document.querySelector(".answer")
let text1 = document.querySelector(".text2")

ans.addEventListener('input' , () =>{
    text1.textContent = ans.value

})