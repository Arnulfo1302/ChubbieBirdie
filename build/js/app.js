document.addEventListener("DOMContentLoaded", function () {
  var e,
    t = document.querySelector(".activador-barra"),
    a = document.querySelector(".portafolio-barra");
  t.addEventListener("mouseenter", function () {
    clearTimeout(e), a.classList.add("barra-activa");
  }),
    t.addEventListener("mouseleave", function () {
      e = setTimeout(function () {
        a.classList.remove("barra-activa");
      }, 200);
    }),
    a.addEventListener("mouseenter", function () {
      clearTimeout(e);
    }),
    a.addEventListener("mouseleave", function () {
      e = setTimeout(function () {
        t.matches(":hover") || a.classList.remove("barra-activa");
      }, 200);
    });
});
