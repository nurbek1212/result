let col1_img = [
    'photo_2024-11-13_10-49-52.jpg',
    'photo_2024-11-13_10-51-04.jpg',
    'photo_2024-11-13_10-51-08.jpg',
    'photo_2024-11-13_10-51-13.jpg',
    'photo_2024-11-13_10-51-16.jpg',
    'photo_2024-11-13_10-51-20.jpg',
    'photo_2024-11-13_10-51-28.jpg',
    'photo_2024-11-13_10-51-49.jpg',
    'photo_2024-11-13_10-51-56.jpg',
    'photo_2024-11-13_10-52-00.jpg',
    'photo_2024-11-13_10-49-52.jpg',
    'photo_2024-11-13_10-51-04.jpg',
    'photo_2024-11-13_10-51-08.jpg',
    'photo_2024-11-13_10-51-13.jpg',
    'photo_2024-11-13_10-51-16.jpg',
    'photo_2024-11-13_10-51-20.jpg',
    'photo_2024-11-13_10-51-28.jpg',
    'photo_2024-11-13_10-51-49.jpg',
    'photo_2024-11-13_10-51-56.jpg',
    'photo_2024-11-13_10-52-00.jpg',
    'photo_2024-11-13_10-49-52.jpg',
    'photo_2024-11-13_10-51-04.jpg',
    'photo_2024-11-13_10-51-08.jpg',
    'photo_2024-11-13_10-51-13.jpg',
    'photo_2024-11-13_10-51-16.jpg',
    'photo_2024-11-13_10-51-20.jpg',
    'photo_2024-11-13_10-51-28.jpg',
    'photo_2024-11-13_10-51-49.jpg',
    'photo_2024-11-13_10-51-56.jpg',
    'photo_2024-11-13_10-52-00.jpg',
]
let col2_img  = [...col1_img]
let col3_img  = [...col2_img]
let col1 = document.querySelector(".col_1")
let col2 = document.querySelector(".col_2")
let col3 = document.querySelector(".col_3")

for(let i=0;i<30;i++){
    let img = document.createElement('img')
    img.src = 'img/'+ col1_img[i]
    col1.appendChild(img)

    let img2 = document.createElement('img')
    img2.src = 'img/'+ col2_img[i]
    col2.appendChild(img2)

    let img3 = document.createElement('img')
    img3.src = 'img/'+ col3_img[i]
    col3.appendChild(img3)

}
let col1_photo = document.querySelectorAll('.col_1 img')
let col2_photo = document.querySelectorAll('.col_2 img')
let col3_photo = document.querySelectorAll('.col_3 img')


window.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        rand1 = Math.floor(Math.random()*20)
        rand2 = Math.floor(Math.random()*20)
        rand3 = Math.floor(Math.random()*20)
        col1_photo.forEach(item =>{
            item.style.transform = `translateY(-${rand1 *100}%)`
        })
        col2_photo.forEach(item =>{
            item.style.transform = `translateY(-${rand2 *100}%)`
        })
        col3_photo.forEach(item =>{
            item.style.transform = `translateY(-${rand3 *100}%)`
        })
    }
})
let box = document.querySelector('.box')
function randclick(){
    rand1 = Math.floor(Math.random()*20)
    rand2 = Math.floor(Math.random()*20)
    rand3 = Math.floor(Math.random()*20)
    col1_photo.forEach(item =>{
        item.style.transform = `translateY(-${rand1 *100}%)`
    })
    col2_photo.forEach(item =>{
        item.style.transform = `translateY(-${rand2 *100}%)`
    })
    col3_photo.forEach(item =>{
        item.style.transform = `translateY(-${rand3 *100}%)`
    })  
}
box.addEventListener('click', randclick)
