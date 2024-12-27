/*  Manual slide
let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function autoSlide() {
    slideIndex++; 
    showSlides(slideIndex); 
    setTimeout(autoSlide, 3000); // Change slide every 3 seconds 
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});*/

/* Auto Slide 
let slideIndex = 0;

function showSlides(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-slideIndex * 100}%)`;
  });
}

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlide, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
  autoSlide();
});
*/

/* Auto Scroll
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll('.slide');
  const slidesContainer = document.querySelector('.slides');
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides();
});*/

let slideIndex = 0;
let autoSlideTimeout;

function showSlides(index) {
  const slides = document.querySelectorAll('.slide');
  const slidesContainer = document.querySelector('.slides');
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(n) {
  clearTimeout(autoSlideTimeout); // Clear any existing timeout to prevent conflicts
  slideIndex += n;
  showSlides(slideIndex);
  autoSlideTimeout = setTimeout(autoSlide, 5000); // Restart the auto slide timer
}

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  autoSlideTimeout = setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
  autoSlide();
  document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});




