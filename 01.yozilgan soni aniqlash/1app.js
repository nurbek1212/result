function run(){
    let son = document.getElementById("son").value
    let p1 = document.querySelector(".p1")
    let p2 = document.querySelector(".p2")
    let p3 = document.querySelector(".p3")

    p1.textContent= son[0];
    p2.textContent= son[1];
    p3.textContent= son[2];

}
