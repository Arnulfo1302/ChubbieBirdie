//Portafolio barra
document.addEventListener("DOMContentLoaded", function () {
  var activadorBarra = document.querySelector(".activador-barra");
  var portafolioBarra = document.querySelector(".portafolio-barra");
  var timeout;

  activadorBarra.addEventListener("mouseenter", function () {
    clearTimeout(timeout);
    portafolioBarra.classList.add("barra-activa");
  });

  activadorBarra.addEventListener("mouseleave", function () {
    timeout = setTimeout(function () {
      portafolioBarra.classList.remove("barra-activa");
    }, 200);
  });

  portafolioBarra.addEventListener("mouseenter", function () {
    clearTimeout(timeout);
  });

  portafolioBarra.addEventListener("mouseleave", function () {
    timeout = setTimeout(function () {
      if (!activadorBarra.matches(":hover")) {
        portafolioBarra.classList.remove("barra-activa");
      }
    }, 200);
  });
});
