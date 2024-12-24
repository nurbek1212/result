function add(){
    let elements = document.querySelector(".elements")

    //yangi element yaratish
    let newElement = document.createElement("div")
    newElement.textContent = "Bu yangi element"
    // yandi class yaratish
    newElement.classList.add("box")

    rang = document.querySelector(".color-code").value
    newElement.style.backgroundColor = `#${rang}`
    //farzand qo`shish pasda
    text = document.querySelector(".enter-text").value;
    newElement.textContent = `${text}`;
    newElement.style.textAlign = 'center'

    let hegiht = document.querySelector(".heig").value
    newElement.style.height  = `${hegiht}px`

    let size = document.querySelector(".size").value
    newElement.style.fontSize  = `${size}px`

    let eni = document.querySelector(".eni").value
    newElement.style.width  = `${eni}px`

    elements.appendChild(newElement);
    lastCreatedElement = newElement;
}
function remove(){
    if (lastCreatedElement > 0) {
        lastCreatedElement.remove(); // Oxirgi yaratilgan elementni DOMdan o'chirish
        lastCreatedElement = null; // O'zgaruvchini tozalash
    }
}
