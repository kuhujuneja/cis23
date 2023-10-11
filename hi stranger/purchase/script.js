const gallery = document.querySelector(".gallery");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const images = document.querySelectorAll(".gallery img");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

function updateGallery() {
    const translateValue = -currentIndex * 100;
    gallery.style.transform = `translateX(${translateValue}%)`;
}

updateGallery();
