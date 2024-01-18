let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 6000); //  Imagen cambiando cada 6 segundos
}