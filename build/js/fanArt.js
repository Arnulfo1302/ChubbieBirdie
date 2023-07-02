//galeria
let previousWidth = window.innerWidth;

window.addEventListener("resize", function () {
  const currentWidth = window.innerWidth;

  if (
    (previousWidth <= 1599 &&
      previousWidth >= 665 &&
      currentWidth <= 664 &&
      currentWidth >= 1) ||
    (previousWidth <= 664 &&
      previousWidth >= 1 &&
      currentWidth <= 1600 &&
      currentWidth >= 665) ||
    (previousWidth <= 1600 && currentWidth >= 1601) ||
    (previousWidth >= 1600 && currentWidth <= 1599)
  ) {
    location.reload();
  }
  previousWidth = currentWidth;
});
document.addEventListener("DOMContentLoaded", iniciarApp);
function iniciarApp() {
  crearGaleria();
}
function crearGaleria() {
  const datosImagenes = [
//-------------------2023---------------
/*1*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/1.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/1.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/1.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/1.png'},
/*2*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/2.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/2.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/2.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/2.png'},
/*3*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/3.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/3.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/3.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/3.png'},
/*11*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/11.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/11.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/11.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/11.png'},
/*13*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/13.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/13.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/13.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/13.png'},
/*4*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/4.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/4.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/4.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/4.png'},
/*16*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/16.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/16.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/16.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/16.png'},
/*5*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/5.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/5.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/5.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/5.png'},
/*6*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/6.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/6.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/6.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/6.png'},
/*7*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/7.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/7.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/7.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/7.png'},
/*8*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/8.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/8.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/8.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/8.png'},
/*9*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/9.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/9.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/9.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/9.png'},
/*10*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/10.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/10.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/10.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/10.png'},
/*12*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/12.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/12.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/12.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/12.png'},
/*14*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/14.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/14.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/14.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/14.png'},
/*15*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/15.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/15.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/15.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/15.png'},
//-------------------2022---------------
/*17*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/17.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/17.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/17.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/17.png'},
/*18*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/18.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/18.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/18.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/18.png'},
/*19*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/19.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/19.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/19.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/19.png'},
//-------------------2021---------------
/*20*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/20.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/20.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/20.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/20.png'},
/*21*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/21.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/21.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/21.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/21.png'},
/*22*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/22.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/22.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/22.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/22.png'},
/*23*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/23.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/23.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/23.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/23.png'},
//-------------------2020---------------
/*24*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/24.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/24.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/24.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/24.png'},
/*25*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/25.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/25.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/25.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/25.png'},
/*26*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/26.webp',srcpwf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/26.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/26.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/26.png'},
  ];
  const anchoVentana = window.innerWidth;
  let galerias;
  // --------------- 664px ------------------------------
  if (anchoVentana <= 664) {
    galerias = document.querySelectorAll(".galeria-arteoriginalA");
  }
  // ---------------- 1600 px --------------------------
  else if (anchoVentana < 1600) {
    galerias = document.querySelectorAll(
      ".galeria-arteoriginalA, .galeria-arteoriginalB"
    );
  }
  // --------------- >1600 px ------------------------------------------
  else {
    galerias = document.querySelectorAll(
      ".galeria-arteoriginalA, .galeria-arteoriginalB, .galeria-arteoriginalC"
    );
  }
  const totalFotos = parseInt(datosImagenes.length);
  const columnas = galerias.length;
  
  for (let i = 0; i < totalFotos; i++) {
    const fila = Math.floor(i / columnas);
    const columna = i % columnas;
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
      <div class="contenedor-imagen-galeria">
        <div class="recorte-imagen">
          <source class="foto-galeria" srcset="${datosImagenes[i].srcw}" type="image/webp" />
          <img class="foto-galeria" src="${datosImagenes[i].srcp}" alt="Galeria Chubbie" />
          <div class="degradado degra-galeria">
            <div class="contenido-galeria">
              <h4>${datosImagenes[i].fecha}</h4>
              <p>${datosImagenes[i].descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    galerias[columna].appendChild(imagen);
    imagen.onclick = function () {
      mostrarImagen(i + 1);
    };
  }
    function mostrarImagen(id) {
      const imagen = document.createElement("picture");
      imagen.innerHTML = `
        <div class="overlay-descripcion">
          <picture>
            <source class="img-overlay" srcset="${datosImagenes[id-1].srcpwf}" type="image/webp" />
            <img class="img-overlay" loading="lazy" src="${datosImagenes[id-1].srcpf}" alt="Galeria Chubbie" />
          </picture>
          <div class="mostrador-info">
            <div class="contenido-galeria-overlay">
            <h4>${datosImagenes[id-1].fecha}</h3>
            <p>${datosImagenes[id-1].descripcion}</p>
            </div>
          </div>
        </div>
      `;
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      overlay.onclick = function () {
        const body = document.querySelector("body");
        body.classList.remove("fijar-body");
        overlay.remove();
      };
      const cerrarFoto = document.createElement("p");
      cerrarFoto.onclick = function () {
        const body = document.querySelector("body");
        body.classList.remove("fijar-body");
        overlay.remove();
      };
      overlay.appendChild(imagen);
      overlay.appendChild(cerrarFoto);
      const body = document.querySelector("body");
      body.appendChild(overlay);
      body.classList.add("fijar-body");
    }
};