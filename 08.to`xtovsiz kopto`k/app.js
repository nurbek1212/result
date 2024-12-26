
const image = document.querySelector(".ball-play");

// Tasodifiy yo'nalish va tezlikni yaratish
function randomMovement() {
  const containerWidth = document.querySelectorAll(".play-game").offsetWidth;
  const containerHeight = document.querySelectorAll(".play-game").offsetHeight;

  // Tasodifiy boshlanish pozitsiyasi
  const startX = Math.random() * containerWidth;
  const startY = Math.random() * containerHeight;
  const endX = Math.random() * containerWidth;
  const endY = Math.random() * containerHeight;

  const duration = Math.random() * 5 + 5; // 5 dan 10 sekundgacha bo‘lgan harakat tezligi

  // Tasvirni yangi pozitsiyaga harakatlantirish
  image.style.left = `${startX}px`;
  image.style.top = `${startY}px`;

  // Animatsiya qo‘shish
  image.style.transition = `all ${duration}s linear`;

  // Tasvirni yangi tasodifiy pozitsiyaga ko‘chirish
  setTimeout(() => {
    image.style.left = `${endX}px`;
    image.style.top = `${endY}px`;
  }, 100);

  // Harakatni qayta boshlash
  setTimeout(randomMovement, duration * 1000);
}

// Dastlabki tasodifiy harakatni boshlash
randomMovement();
console.log('fcdxrsxd')