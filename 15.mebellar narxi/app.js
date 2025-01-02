function changePhoto(name,photo ,price) {
    document.querySelector('.name').textContent = `${name}`
    document.querySelector(".furit").src = photo
    document.querySelector(".furit-price").textContent = `narxi : ${price}so'm`
}