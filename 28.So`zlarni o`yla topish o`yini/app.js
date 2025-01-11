let words = document.querySelector('.words');
let game_display = document.querySelector('.game-display');

// So'zlar va ularning harflari
let word_json = {
    'VATAN': ['V', 'A', 'T', 'A', 'N'],
    'TIRIK': ['T', 'I', 'R', 'I', 'K'],
    'ONA': ['O', 'N', 'A'],
    'KITOB': ['K', 'I', 'T', 'O', 'B'],
    'DARAXT': ['D', 'A', 'R', 'A', 'X', 'T'],
    'BOLALAR': ['B', 'O', 'L', 'A', 'L', 'A', 'R'],
    'SHOH': ['S', 'H', 'O', 'H'],
    'XALQ': ['X', 'A', 'L', 'Q'],
    'HAYOT': ['H', 'A', 'Y', 'O', 'T'],
    'XAZINA': ['X', 'A', 'Z', 'I', 'N', 'A'],
    'OSMON': ['O', 'S', 'M', 'O', 'N'],
    'OLIM': ['O', 'L', 'I', 'M'],
    'DUNYO': ['D', 'U', 'N', 'Y', 'O'],
    'USTOZ': ['U', 'S', 'T', 'O', 'Z'],
    'OTA': ['O', 'T', 'A'],
    'QAHRAMON': ['Q', 'A', 'H', 'R', 'A', 'M', 'O', 'N']
};

// Yuqoridagi so'zlar ro'yxatini chiqarish
let suzlar = Object.keys(word_json);
for (let i = 0; i < suzlar.length; i++) {
    let span = document.createElement('span');
    span.classList.add('word');
    span.textContent = suzlar[i];
    words.appendChild(span);
}

// Barcha harflarni yig'ish
let allLetter = [];
for (let key in word_json) {
    allLetter = allLetter.concat(word_json[key]);
}

// Harflarni aralashtirish
for (let i = 0; i < allLetter.length; i++) {
    let rand1 = Math.floor(Math.random() * allLetter.length);
    let rand2 = Math.floor(Math.random() * allLetter.length);
    let t = allLetter[rand1];
    allLetter[rand1] = allLetter[rand2];
    allLetter[rand2] = t;
}

// Tanlangan harflarni saqlash uchun bo'sh massiv
let selectedLetters = [];

// Harflarni ekranga chiqarish
for (let i = 0; i < allLetter.length; i++) {
    let span = document.createElement('span');
    span.classList.add('latter');
    span.textContent = allLetter[i];
    game_display.appendChild(span);

    span.addEventListener('click', function () {
        // Harfni belgilash va tanlangan harflarga qo‘shish
        span.style.backgroundColor = 'red';
        selectedLetters.push({ letter: span.textContent, element: span }); // Harfni va uning elementini qo‘shish
    
        // Tanlangan harflardan yig‘ilgan so‘z
        let currentWord = selectedLetters.map(item => item.letter).join('');
    
        // Agar hosil bo‘lgan so‘z `suzlar` ro‘yxatidagi biror so‘zga mos kelsa
        if (suzlar.includes(currentWord)) {
            // Faqat tanlangan harflarni yashirish
            selectedLetters.forEach(item => {
                item.element.style.visibility = 'hidden'; // Harfni yashirish
            });
    
            // Ustidan chiziq chizish
            let wordElements = document.querySelectorAll('.word');
            wordElements.forEach(word => {
                if (word.textContent === currentWord) {
                    word.style.textDecoration = 'line-through'; // Ustidan chiziq chizish
                }
            });
    
            // Tanlangan harflarni tozalash
            selectedLetters = [];
        }
    });
    
}

// Harflarni tekshirish va mos so'zni chizish funksiyasi
function checkWordMatch() {
    for (let key in word_json) {
        let wordLetters = word_json[key];
        // Agar tanlangan harflar so'z bilan mos kelsa
        if (arraysMatch(selectedLetters, wordLetters)) {
            // So'zni ustidan chiziq chizish
            let wordElements = document.querySelectorAll('.word');
            wordElements.forEach(word => {
                if (word.textContent === key) {
                    word.style.textDecoration = 'line-through';
                    
                }
            });

            // Tanlangan harflarni tozalash
            selectedLetters = [];
        }
    }
}
// Massivlarni solishtirish funksiyasi
function arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
}
