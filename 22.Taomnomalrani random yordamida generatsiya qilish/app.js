let taomlar = [
    "Qaynatilgan tuxum, sabzavotli salat",
    "Achchiq qahva",
    "Guruch, tovuq go'shti va sabzavotlar",
    "Pishiriq va choy",
    "Ko'k choy va somsa",
    "Yogurt va yong'oq",
    "Murabbo va sariyog' bilan non",
    "Yogurt va meva",
    "Makaron va sosiskalar",
    "Nonushta va kofe",
    "Grechka va go'sht",
    "Shokolad va sut",
    "Non, sariyog' va asal",
    "Choy va pishiriqlar",
    "Qo'ziqorinli sho'rva",
    "Pishiriq va sharbat",
    "Tovuq sho'rva va non",
    "Sut va non",
    "Tuxumli qovurma va pomidor",
    "Meva smuzi",
    "Shavla",
    "Choy va yong'oq",
    "Sabzavotli salat va kotlet",
    "Meva va choy",
    "Non va pishloq",
    "Qahva va shokolad",
    "Palov",
    "Kofe va shirinlik",
    "Mantilar",
    "Pishloq va sut",
    "Non, sariyog' va murabbo",
    "Choy va pishiriq",
    "Tovuq go'shti va salat",
    "Choy va non",
    "Sho'rva va salat",
    "Meva va qatiq",
    "Qaynatilgan tuxum va olma",
    "Meva va yong'oq",
    "Dimlama",
    "Sharbat va pishiriq",
    "Fasol va salat",
    "Choy va non"

]
let food = document.querySelectorAll('.food')
window.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        for(let i=1; i<=100; i++){
            let rand1 = Math.floor(Math.random()*100)%42
            let rand2 = Math.floor(Math.random()*100)%42
            // item.textContent = taomlar[index]
            let t = taomlar[rand1]
            taomlar[rand1] = taomlar[rand2]
            taomlar[rand2] = t
        }



        for(let i=0; i<=36; i++){
            food[i].textContent = taomlar[i]
        }
    }
})
let ganert = document.querySelector('.generatsiya');

// "Enter" tugmasi bosilganda ishlovchi funksiya
function generateFood() {
    for (let i = 1; i <= 100; i++) {
        let rand1 = Math.floor(Math.random() * 100) % 42;
        let rand2 = Math.floor(Math.random() * 100) % 42;
        let t = taomlar[rand1];
        taomlar[rand1] = taomlar[rand2];
        taomlar[rand2] = t;
    }

    for (let i = 0; i <= 36; i++) {
        food[i].textContent = taomlar[i];
    }
}
ganert.addEventListener('click', generateFood);
