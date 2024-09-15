// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos con el atributo data-bs-toggle="tooltip"
    var tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  
    // Inicializa cada tooltip
    tooltips.forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip, {
        placement: "bottom" // Configura el tooltip para que aparezca debajo
      });
    });
  });
