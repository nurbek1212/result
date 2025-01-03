let answer = document.querySelector(".text2")
let xta = document.querySelector(".qwer1")

xta.addEventListener('click' , ()=>{
    let num1 = parseInt(document.querySelector(".num1").value) || 0;
    let num2 = parseInt(document.querySelector(".num2").value) || 0;
    var sum = num1 + num2;
    document.querySelector(".text2").textContent = " Result: " + `${sum}` ;
    console.log("ugfiofgererg");

})