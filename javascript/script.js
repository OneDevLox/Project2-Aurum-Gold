const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

const track = document.getElementById("testimonialsTrack");
const slides = document.querySelectorAll(".testimonial-item");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.getElementById("testimonialPrev");
const nextBtn = document.getElementById("testimonialNext");

//Buttons
const tabButtons = document.querySelectorAll(".product-btns a");
const tabs = document.querySelectorAll(".products-tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    // Remove active from all tabs
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Add active to the selected tab
    document.getElementById(target).classList.add("active");

    // Optional: highlight active button
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// OPEN MENU
hamburger.addEventListener("click", () => {
  mobileNav.classList.add("active");
  overlay.classList.add("active");
});

// CLOSE MENU (X button)
closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});

// CLOSE MENU (click outside)
overlay.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});

let index = 0;
const totalSlides = slides.length;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= totalSlides) index = 0;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = totalSlides - 1;
  updateSlider();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    index = dot.dataset.index;
    updateSlider();
  });
});

setInterval(() => {
  index++;
  if (index >= totalSlides) index = 0;
  updateSlider();
}, 50000);

