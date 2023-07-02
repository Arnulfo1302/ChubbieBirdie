let previousWidth = window.innerWidth;
function iniciarApp() {
  crearGaleria();
}
function crearGaleria() {
  const i = [
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/1.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/1.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/1.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/1.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/2.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/2.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/2.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/2.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/3.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/3.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/3.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/3.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/4.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/4.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/4.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/4.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/5.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/5.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/5.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/5.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/6.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/6.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/6.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/6.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/7.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/7.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/7.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/7.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/8.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/8.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/8.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/8.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/9.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/9.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/9.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/9.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/10.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/10.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/10.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/10.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/11.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/11.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/11.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/11.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/12.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/12.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/12.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/12.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/13.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/13.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/13.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/13.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/14.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/14.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/14.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/14.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/15.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/15.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/15.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/15.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/16.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/16.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/16.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/16.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/17.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/17.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/17.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/17.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/18.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/18.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/18.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/18.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/19.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/19.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/19.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/19.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/20.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/20.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/20.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/20.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/21.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/21.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/21.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/21.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/22.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/22.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/22.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/22.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/23.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/23.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/23.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/23.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/24.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/24.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/24.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/24.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/25.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/25.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/25.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/25.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/26.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/26.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/26.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/26.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/27.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/27.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/27.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/27.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/28.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/28.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/28.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/28.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/29.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/29.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/29.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/29.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/30.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/30.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/30.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/30.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/31.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/31.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/31.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/31.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Comisiones/+1600px/Todas_+1600px/32.webp",
        srcpwf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/32.webp",
        srcp: "./build/img/Comisiones/+1600px/Todas_+1600px/32.png",
        srcpf: "./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/32.png",
      },
    ],
    s = window.innerWidth;
  let p;
  p =
    s <= 664
      ? document.querySelectorAll(".galeria-arteoriginalA")
      : s < 1600
      ? document.querySelectorAll(
          ".galeria-arteoriginalA, .galeria-arteoriginalB"
        )
      : document.querySelectorAll(
          ".galeria-arteoriginalA, .galeria-arteoriginalB, .galeria-arteoriginalC"
        );
  const o = parseInt(i.length);
  console.log(o);
  let e = 0;
  for (let s = 1; s < o; s++) {
    for (let l = 0; l < p.length; l++) {
      const n = document.createElement("picture");
      if (
        ((n.innerHTML = `\n      <div class="contenedor-imagen-galeria">\n        <div class="recorte-imagen">\n          <source class="foto-galeria" srcset="${
          i[s - 1].srcw
        }" type="image/webp" />\n          <img class="foto-galeria" src="${
          i[s - 1].srcp
        }" alt="Galeria Chubbie" />\n          <div class="degradado degra-galeria">\n            <div class="contenido-galeria">\n            <h4>${
          i[s - 1].fecha
        }</h3>\n            <p>${
          i[s - 1].descripcion
        }</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    `),
        p[l].appendChild(n),
        (n.onclick = function () {
          console.log(l + " " + s + " total fotos: " + o),
            0 == l && s != o
              ? ((e = 2), console.log("1"))
              : 2 == l
              ? ((e = 0), console.log("2"))
              : 1 == l && s == o
              ? ((e = 0), console.log("3"))
              : ((e = 1), console.log("4")),
            console.log(l + " " + s + " " + e),
            d(s - e);
        }),
        s + 1 == o + 1)
      )
        break;
      s += 1;
    }
    s != o && (s -= 1);
  }
  function d(s) {
    const p = document.createElement("picture");
    p.innerHTML = `\n        <div class="overlay-descripcion">\n          <picture>\n            <source class="img-overlay" srcset="${
      i[s - 1].srcpwf
    }" type="image/webp" />\n            <img class="img-overlay" loading="lazy" src="${
      i[s - 1].srcpf
    }" alt="Galeria Chubbie" />\n          </picture>\n          <div class="mostrador-info">\n            <div class="contenido-galeria-overlay">\n            <h4>${
      i[s - 1].fecha
    }</h3>\n            <p>${
      i[s - 1].descripcion
    }</p>\n            </div>\n          </div>\n        </div>\n      `;
    const o = document.createElement("div");
    o.classList.add("overlay"),
      (o.onclick = function () {
        document.querySelector("body").classList.remove("fijar-body"),
          o.remove();
      });
    const e = document.createElement("p");
    (e.onclick = function () {
      document.querySelector("body").classList.remove("fijar-body"), o.remove();
    }),
      o.appendChild(p),
      o.appendChild(e);
    const d = document.querySelector("body");
    d.appendChild(o), d.classList.add("fijar-body");
  }
}
window.addEventListener("resize", function () {
  const i = window.innerWidth;
  ((previousWidth <= 1599 && previousWidth >= 665 && i <= 664 && i >= 1) ||
    (previousWidth <= 664 && previousWidth >= 1 && i <= 1600 && i >= 665) ||
    (previousWidth <= 1600 && i >= 1601) ||
    (previousWidth >= 1600 && i <= 1599)) &&
    location.reload(),
    (previousWidth = i);
}),
  document.addEventListener("DOMContentLoaded", iniciarApp);
