const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".summary-slide");
const dots = document.querySelectorAll(".dot-btn");

let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 5000);