const reviewSlides = document.querySelectorAll('.review-slide');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');

let currentSlide = 0;

function showSlide(n) {
  reviewSlides[currentSlide].classList.remove('active');
  currentSlide = (n + reviewSlides.length) % reviewSlides.length;
  reviewSlides[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));