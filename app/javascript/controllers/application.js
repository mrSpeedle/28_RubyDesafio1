import { Application } from "@hotwired/stimulus";

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los elementos con el atributo data-bs-toggle="tooltip"
  var tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  // Inicializa cada tooltip
  tooltips.forEach(function (tooltip) {
    new bootstrap.Tooltip(tooltip, {
      placement: "bottom", // Configura el tooltip para que aparezca debajo
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var jsCarousel = document.getElementById("jsCarousel");
  if (jsCarousel) {
    new bootstrap.Carousel(jsCarousel);
  }

  var htmlCarousel = document.getElementById("htmlCarousel");
  if (htmlCarousel) {
    new bootstrap.Carousel(htmlCarousel);
  }

  var carouselGarlic = document.getElementById("carouselGarlic");
  if (carouselGarlic) {
    new bootstrap.Carousel(carouselGarlic);
  }

  var carouselVida = document.getElementById("carouselVida");
  if (carouselVida) {
    new bootstrap.Carousel(carouselVida);
  }
});
