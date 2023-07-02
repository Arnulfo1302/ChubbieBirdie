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
  const anchoVentana = window.innerWidth;
  let galerias;
  // --------------- 664px ------------------------------
  if (anchoVentana <= 664) {
    galerias = document.querySelectorAll(".galeria-arteoriginalA");
    const totalFotos = 67;
    const fotosPorGaleria = Math.ceil(totalFotos / galerias.length);
    const fotosDisponibles = Array.from(
      { length: totalFotos },
      (_, i) => i + 1
    );
    const datosImagenes = [
      { nombre: "null", descripcion: "null" },
      /*1*/ { nombre: "2023", descripcion: "" },
      /*2*/ { nombre: "2023", descripcion: "" },
      /*3*/ { nombre: "2023", descripcion: "" },
      /*4*/ { nombre: "2023", descripcion: "" },
      /*5*/ { nombre: "2023", descripcion: "" },
      /*6*/ { nombre: "2023", descripcion: "" },
      /*7*/ { nombre: "2022", descripcion: "" },
      /*8*/ { nombre: "2022", descripcion: "" },
      /*9*/ { nombre: "2022", descripcion: "" },
      /*10*/ { nombre: "2022", descripcion: "" },
      /*11*/ { nombre: "2021", descripcion: "" },
      /*12*/ { nombre: "2021", descripcion: "" },
      /*13*/ { nombre: "2021", descripcion: "" },
      /*14*/ { nombre: "2021", descripcion: "" },
      /*15*/ { nombre: "2021", descripcion: "" },
      /*16*/ { nombre: "2021", descripcion: "" },
      /*17*/ { nombre: "2021", descripcion: "" },
      /*18*/ { nombre: "2020", descripcion: "" },
      /*19*/ { nombre: "2020", descripcion: "" },
      /*20*/ { nombre: "2020", descripcion: "" },
      /*21*/ { nombre: "2020", descripcion: "" },
      /*22*/ { nombre: "2020", descripcion: "" },
      /*23*/ { nombre: "2020", descripcion: "" },
      /*24*/ { nombre: "2023", descripcion: "" },
      /*25*/ { nombre: "2023", descripcion: "" },
      /*26*/ { nombre: "2023", descripcion: "" },
      /*27*/ { nombre: "2023", descripcion: "" },
      /*28*/ { nombre: "2023", descripcion: "" },
      /*29*/ { nombre: "2023", descripcion: "" },
      /*30*/ { nombre: "2020", descripcion: "" },
      /*31*/ { nombre: "2022", descripcion: "" },
      /*32*/ { nombre: "2022", descripcion: "" },
      /*33*/ { nombre: "2022", descripcion: "" },
      /*34*/ { nombre: "2022", descripcion: "" },
      /*35*/ { nombre: "2021", descripcion: "" },
      /*36*/ { nombre: "2021", descripcion: "" },
      /*37*/ { nombre: "2021", descripcion: "" },
      /*38*/ { nombre: "2021", descripcion: "" },
      /*39*/ { nombre: "2021", descripcion: "" },
      /*40*/ { nombre: "2021", descripcion: "" },
      /*41*/ { nombre: "2020", descripcion: "" },
      /*42*/ { nombre: "2020", descripcion: "" },
      /*43*/ { nombre: "2020", descripcion: "" },
      /*44*/ { nombre: "2020", descripcion: "" },
      /*45*/ { nombre: "2020", descripcion: "" },
      /*46*/ { nombre: "2020", descripcion: "" },
      /*47*/ { nombre: "2023", descripcion: "" },
      /*48*/ { nombre: "2023", descripcion: "" },
      /*48*/ { nombre: "2023", descripcion: "" },
      /*49*/ { nombre: "2023", descripcion: "" },
      /*50*/ { nombre: "2023", descripcion: "" },
      /*51*/ { nombre: "2023", descripcion: "" },
      /*52*/ { nombre: "2023", descripcion: "" },
      /*53*/ { nombre: "2023", descripcion: "" },
      /*54*/ { nombre: "2022", descripcion: "" },
      /*55*/ { nombre: "2022", descripcion: "" },
      /*56*/ { nombre: "2022", descripcion: "" },
      /*57*/ { nombre: "2022", descripcion: "" },
      /*58*/ { nombre: "2021", descripcion: "" },
      /*59*/ { nombre: "2021", descripcion: "" },
      /*60*/ { nombre: "2021", descripcion: "" },
      /*61*/ { nombre: "2021", descripcion: "" },
      /*62*/ { nombre: "2021", descripcion: "" },
      /*63*/ { nombre: "2021", descripcion: "" },
      /*64*/ { nombre: "2020", descripcion: "" },
      /*65*/ { nombre: "2020", descripcion: "" },
      /*66*/ { nombre: "2020", descripcion: "" },
    ];

    galerias.forEach((galeria, index) => {
      const inicio = index * fotosPorGaleria;
      const fin = inicio + fotosPorGaleria;
      const fotosAsignadas = fotosDisponibles.slice(inicio, fin);

      fotosAsignadas.forEach((foto) => {
        const imagen = document.createElement("picture");
        imagen.innerHTML = `
        <div class="contenedor-imagen-galeria">
          <div class="recorte-imagen">
            <source class="foto-galeria" srcset="./build/img/Arte_Original/+1600px/Todas_+1600px/${foto}.webp" type="image/webp" />
            <img class="foto-galeria" src="./build/img/Arte_Original/+1600px/Todas_+1600px/${foto}.png" alt="Galeria Chubbie" />
            <div class="degradado degra-galeria">
              <div class="contenido-galeria">
              <h4>${datosImagenes[foto].nombre}</h3>
              <p>${datosImagenes[foto].descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      `;
        /*<h4>${datosImagenes[foto].nombre}</h3>
        <p>${datosImagenes[foto].descripcion}</p>*/
        imagen.onclick = function () {
          mostrarImagen(foto);
        };

        galeria.appendChild(imagen);
      });
    });
    function mostrarImagen(id) {
      const datosImagenes = [
        { nombre: "null", descripcion: "null" },
        /*1*/ { nombre: "2023", descripcion: "" },
        /*2*/ { nombre: "2023", descripcion: "" },
        /*3*/ { nombre: "2023", descripcion: "" },
        /*4*/ { nombre: "2023", descripcion: "" },
        /*5*/ { nombre: "2023", descripcion: "" },
        /*6*/ { nombre: "2023", descripcion: "" },
        /*7*/ { nombre: "2022", descripcion: "" },
        /*8*/ { nombre: "2022", descripcion: "" },
        /*9*/ { nombre: "2022", descripcion: "" },
        /*10*/ { nombre: "2022", descripcion: "" },
        /*11*/ { nombre: "2021", descripcion: "" },
        /*12*/ { nombre: "2021", descripcion: "" },
        /*13*/ { nombre: "2021", descripcion: "" },
        /*14*/ { nombre: "2021", descripcion: "" },
        /*15*/ { nombre: "2021", descripcion: "" },
        /*16*/ { nombre: "2021", descripcion: "" },
        /*17*/ { nombre: "2021", descripcion: "" },
        /*18*/ { nombre: "2020", descripcion: "" },
        /*19*/ { nombre: "2020", descripcion: "" },
        /*20*/ { nombre: "2020", descripcion: "" },
        /*21*/ { nombre: "2020", descripcion: "" },
        /*22*/ { nombre: "2020", descripcion: "" },
        /*23*/ { nombre: "2020", descripcion: "" },
        /*24*/ { nombre: "2023", descripcion: "" },
        /*25*/ { nombre: "2023", descripcion: "" },
        /*26*/ { nombre: "2023", descripcion: "" },
        /*27*/ { nombre: "2023", descripcion: "" },
        /*28*/ { nombre: "2023", descripcion: "" },
        /*29*/ { nombre: "2023", descripcion: "" },
        /*30*/ { nombre: "2020", descripcion: "" },
        /*31*/ { nombre: "2022", descripcion: "" },
        /*32*/ { nombre: "2022", descripcion: "" },
        /*33*/ { nombre: "2022", descripcion: "" },
        /*34*/ { nombre: "2022", descripcion: "" },
        /*35*/ { nombre: "2021", descripcion: "" },
        /*36*/ { nombre: "2021", descripcion: "" },
        /*37*/ { nombre: "2021", descripcion: "" },
        /*38*/ { nombre: "2021", descripcion: "" },
        /*39*/ { nombre: "2021", descripcion: "" },
        /*40*/ { nombre: "2021", descripcion: "" },
        /*41*/ { nombre: "2020", descripcion: "" },
        /*42*/ { nombre: "2020", descripcion: "" },
        /*43*/ { nombre: "2020", descripcion: "" },
        /*44*/ { nombre: "2020", descripcion: "" },
        /*45*/ { nombre: "2020", descripcion: "" },
        /*46*/ { nombre: "2020", descripcion: "" },
        /*47*/ { nombre: "2023", descripcion: "" },
        /*48*/ { nombre: "2023", descripcion: "" },
        /*48*/ { nombre: "2023", descripcion: "" },
        /*49*/ { nombre: "2023", descripcion: "" },
        /*50*/ { nombre: "2023", descripcion: "" },
        /*51*/ { nombre: "2023", descripcion: "" },
        /*52*/ { nombre: "2023", descripcion: "" },
        /*53*/ { nombre: "2023", descripcion: "" },
        /*54*/ { nombre: "2022", descripcion: "" },
        /*55*/ { nombre: "2022", descripcion: "" },
        /*56*/ { nombre: "2022", descripcion: "" },
        /*57*/ { nombre: "2022", descripcion: "" },
        /*58*/ { nombre: "2021", descripcion: "" },
        /*59*/ { nombre: "2021", descripcion: "" },
        /*60*/ { nombre: "2021", descripcion: "" },
        /*61*/ { nombre: "2021", descripcion: "" },
        /*62*/ { nombre: "2021", descripcion: "" },
        /*63*/ { nombre: "2021", descripcion: "" },
        /*64*/ { nombre: "2020", descripcion: "" },
        /*65*/ { nombre: "2020", descripcion: "" },
        /*66*/ { nombre: "2020", descripcion: "" },
      ];

      const imagen = document.createElement("picture");
      imagen.innerHTML = `
        <div class="overlay-descripcion">
          <picture>
            <source class="img-overlay" srcset="./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/${id}.webp" type="image/webp" />
            <img class="img-overlay" loading="lazy" src="./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/${id}.png" alt="Galeria Chubbie" />
          </picture>
          <div class="mostrador-info">
            <div class="contenido-galeria-overlay">
            <h4>${datosImagenes[id].nombre}</h3>
            <p>${datosImagenes[id].descripcion}</p>
            </div>
          </div>
        </div>
      `;
      /*<h4>${datosImagenes[foto].nombre}</h3>
            <p>${datosImagenes[foto].descripcion}</p>*/
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
  }
  // ---------------- 1600 px --------------------------
  else if (anchoVentana < 1600) {
    galerias = document.querySelectorAll(
      ".galeria-arteoriginalA, .galeria-arteoriginalB"
    );
    const totalFotos = 67;
    const fotosPorGaleria = Math.ceil(totalFotos / galerias.length);
    const fotosDisponibles = Array.from(
      { length: totalFotos },
      (_, i) => i + 1
    );
    const datosImagenes = [
      { nombre: "null", descripcion: "null" },
      /*1*/ { nombre: "2023", descripcion: "" },
      /*2*/ { nombre: "2023", descripcion: "" },
      /*3*/ { nombre: "2023", descripcion: "" },
      /*4*/ { nombre: "2023", descripcion: "" },
      /*5*/ { nombre: "2023", descripcion: "" },
      /*6*/ { nombre: "2023", descripcion: "" },
      /*7*/ { nombre: "2022", descripcion: "" },
      /*8*/ { nombre: "2022", descripcion: "" },
      /*9*/ { nombre: "2022", descripcion: "" },
      /*10*/ { nombre: "2022", descripcion: "" },
      /*11*/ { nombre: "2021", descripcion: "" },
      /*12*/ { nombre: "2021", descripcion: "" },
      /*13*/ { nombre: "2021", descripcion: "" },
      /*14*/ { nombre: "2021", descripcion: "" },
      /*15*/ { nombre: "2021", descripcion: "" },
      /*16*/ { nombre: "2021", descripcion: "" },
      /*17*/ { nombre: "2021", descripcion: "" },
      /*18*/ { nombre: "2020", descripcion: "" },
      /*19*/ { nombre: "2020", descripcion: "" },
      /*20*/ { nombre: "2020", descripcion: "" },
      /*21*/ { nombre: "2020", descripcion: "" },
      /*22*/ { nombre: "2020", descripcion: "" },
      /*23*/ { nombre: "2020", descripcion: "" },
      /*24*/ { nombre: "2023", descripcion: "" },
      /*25*/ { nombre: "2023", descripcion: "" },
      /*26*/ { nombre: "2023", descripcion: "" },
      /*27*/ { nombre: "2023", descripcion: "" },
      /*28*/ { nombre: "2023", descripcion: "" },
      /*29*/ { nombre: "2023", descripcion: "" },
      /*30*/ { nombre: "2020", descripcion: "" },
      /*31*/ { nombre: "2022", descripcion: "" },
      /*32*/ { nombre: "2022", descripcion: "" },
      /*33*/ { nombre: "2022", descripcion: "" },
      /*34*/ { nombre: "2022", descripcion: "" },
      /*35*/ { nombre: "2021", descripcion: "" },
      /*36*/ { nombre: "2021", descripcion: "" },
      /*37*/ { nombre: "2021", descripcion: "" },
      /*38*/ { nombre: "2021", descripcion: "" },
      /*39*/ { nombre: "2021", descripcion: "" },
      /*40*/ { nombre: "2021", descripcion: "" },
      /*41*/ { nombre: "2020", descripcion: "" },
      /*42*/ { nombre: "2020", descripcion: "" },
      /*43*/ { nombre: "2020", descripcion: "" },
      /*44*/ { nombre: "2020", descripcion: "" },
      /*45*/ { nombre: "2020", descripcion: "" },
      /*46*/ { nombre: "2020", descripcion: "" },
      /*47*/ { nombre: "2023", descripcion: "" },
      /*48*/ { nombre: "2023", descripcion: "" },
      /*48*/ { nombre: "2023", descripcion: "" },
      /*49*/ { nombre: "2023", descripcion: "" },
      /*50*/ { nombre: "2023", descripcion: "" },
      /*51*/ { nombre: "2023", descripcion: "" },
      /*52*/ { nombre: "2023", descripcion: "" },
      /*53*/ { nombre: "2023", descripcion: "" },
      /*54*/ { nombre: "2022", descripcion: "" },
      /*55*/ { nombre: "2022", descripcion: "" },
      /*56*/ { nombre: "2022", descripcion: "" },
      /*57*/ { nombre: "2022", descripcion: "" },
      /*58*/ { nombre: "2021", descripcion: "" },
      /*59*/ { nombre: "2021", descripcion: "" },
      /*60*/ { nombre: "2021", descripcion: "" },
      /*61*/ { nombre: "2021", descripcion: "" },
      /*62*/ { nombre: "2021", descripcion: "" },
      /*63*/ { nombre: "2021", descripcion: "" },
      /*64*/ { nombre: "2020", descripcion: "" },
      /*65*/ { nombre: "2020", descripcion: "" },
      /*66*/ { nombre: "2020", descripcion: "" },
    ];

    galerias.forEach((galeria, index) => {
      const inicio = index * fotosPorGaleria;
      const fin = inicio + fotosPorGaleria;
      const fotosAsignadas = fotosDisponibles.slice(inicio, fin);

      fotosAsignadas.forEach((foto) => {
        const imagen = document.createElement("picture");
        imagen.innerHTML = `
        <div class="contenedor-imagen-galeria">
          <div class="recorte-imagen">
            <source class="foto-galeria" srcset="./build/img/Arte_Original/+1600px/Todas_+1600px/${foto}.webp" type="image/webp" />
            <img class="foto-galeria" src="./build/img/Arte_Original/+1600px/Todas_+1600px/${foto}.png" alt="Galeria Chubbie" />
            <div class="degradado degra-galeria">
              <div class="contenido-galeria">
              <h4>${datosImagenes[foto].nombre}</h3>
              <p>${datosImagenes[foto].descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      `;
        /*<h4>${datosImagenes[foto].nombre}</h3>
        <p>${datosImagenes[foto].descripcion}</p>*/
        imagen.onclick = function () {
          mostrarImagen(foto);
        };

        galeria.appendChild(imagen);
      });
    });
    function mostrarImagen(id) {
      const datosImagenes = [
        { nombre: "null", descripcion: "null" },
        /*1*/ { nombre: "2023", descripcion: "" },
        /*2*/ { nombre: "2023", descripcion: "" },
        /*3*/ { nombre: "2023", descripcion: "" },
        /*4*/ { nombre: "2023", descripcion: "" },
        /*5*/ { nombre: "2023", descripcion: "" },
        /*6*/ { nombre: "2023", descripcion: "" },
        /*7*/ { nombre: "2022", descripcion: "" },
        /*8*/ { nombre: "2022", descripcion: "" },
        /*9*/ { nombre: "2022", descripcion: "" },
        /*10*/ { nombre: "2022", descripcion: "" },
        /*11*/ { nombre: "2021", descripcion: "" },
        /*12*/ { nombre: "2021", descripcion: "" },
        /*13*/ { nombre: "2021", descripcion: "" },
        /*14*/ { nombre: "2021", descripcion: "" },
        /*15*/ { nombre: "2021", descripcion: "" },
        /*16*/ { nombre: "2021", descripcion: "" },
        /*17*/ { nombre: "2021", descripcion: "" },
        /*18*/ { nombre: "2020", descripcion: "" },
        /*19*/ { nombre: "2020", descripcion: "" },
        /*20*/ { nombre: "2020", descripcion: "" },
        /*21*/ { nombre: "2020", descripcion: "" },
        /*22*/ { nombre: "2020", descripcion: "" },
        /*23*/ { nombre: "2020", descripcion: "" },
        /*24*/ { nombre: "2023", descripcion: "" },
        /*25*/ { nombre: "2023", descripcion: "" },
        /*26*/ { nombre: "2023", descripcion: "" },
        /*27*/ { nombre: "2023", descripcion: "" },
        /*28*/ { nombre: "2023", descripcion: "" },
        /*29*/ { nombre: "2023", descripcion: "" },
        /*30*/ { nombre: "2020", descripcion: "" },
        /*31*/ { nombre: "2022", descripcion: "" },
        /*32*/ { nombre: "2022", descripcion: "" },
        /*33*/ { nombre: "2022", descripcion: "" },
        /*34*/ { nombre: "2022", descripcion: "" },
        /*35*/ { nombre: "2021", descripcion: "" },
        /*36*/ { nombre: "2021", descripcion: "" },
        /*37*/ { nombre: "2021", descripcion: "" },
        /*38*/ { nombre: "2021", descripcion: "" },
        /*39*/ { nombre: "2021", descripcion: "" },
        /*40*/ { nombre: "2021", descripcion: "" },
        /*41*/ { nombre: "2020", descripcion: "" },
        /*42*/ { nombre: "2020", descripcion: "" },
        /*43*/ { nombre: "2020", descripcion: "" },
        /*44*/ { nombre: "2020", descripcion: "" },
        /*45*/ { nombre: "2020", descripcion: "" },
        /*46*/ { nombre: "2020", descripcion: "" },
        /*47*/ { nombre: "2023", descripcion: "" },
        /*48*/ { nombre: "2023", descripcion: "" },
        /*48*/ { nombre: "2023", descripcion: "" },
        /*49*/ { nombre: "2023", descripcion: "" },
        /*50*/ { nombre: "2023", descripcion: "" },
        /*51*/ { nombre: "2023", descripcion: "" },
        /*52*/ { nombre: "2023", descripcion: "" },
        /*53*/ { nombre: "2023", descripcion: "" },
        /*54*/ { nombre: "2022", descripcion: "" },
        /*55*/ { nombre: "2022", descripcion: "" },
        /*56*/ { nombre: "2022", descripcion: "" },
        /*57*/ { nombre: "2022", descripcion: "" },
        /*58*/ { nombre: "2021", descripcion: "" },
        /*59*/ { nombre: "2021", descripcion: "" },
        /*60*/ { nombre: "2021", descripcion: "" },
        /*61*/ { nombre: "2021", descripcion: "" },
        /*62*/ { nombre: "2021", descripcion: "" },
        /*63*/ { nombre: "2021", descripcion: "" },
        /*64*/ { nombre: "2020", descripcion: "" },
        /*65*/ { nombre: "2020", descripcion: "" },
        /*66*/ { nombre: "2020", descripcion: "" },
      ];

      const imagen = document.createElement("picture");
      imagen.innerHTML = `
        <div class="overlay-descripcion">
          <picture>
            <source class="img-overlay" srcset="./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/${id}.webp" type="image/webp" />
            <img class="img-overlay" loading="lazy" src="./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/${id}.png" alt="Galeria Chubbie" />
          </picture>
          <div class="mostrador-info">
            <div class="contenido-galeria-overlay">
            <h4>${datosImagenes[id].nombre}</h3>
            <p>${datosImagenes[id].descripcion}</p>
            </div>
          </div>
        </div>
      `;
      /*<h4>${datosImagenes[foto].nombre}</h3>
            <p>${datosImagenes[foto].descripcion}</p>*/
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
  }
  // --------------- >1600 px ------------------------------------------
  else {
    galerias = document.querySelectorAll(
      ".galeria-arteoriginalA, .galeria-arteoriginalB, .galeria-arteoriginalC"
    );
    const totalFotos = 67;
    const fotosPorGaleria = Math.ceil(totalFotos / galerias.length);
    const fotosDisponibles = Array.from(
      { length: totalFotos },
      (_, i) => i + 1
    );
    const datosImagenes = [
      { nombre: "null", descripcion: "null" },
      /*1*/ { nombre: "2023", descripcion: "" },
      /*2*/ { nombre: "2023", descripcion: "" },
      /*3*/ { nombre: "2023", descripcion: "" },
      /*4*/ { nombre: "2023", descripcion: "" },
      /*5*/ { nombre: "2023", descripcion: "" },
      /*6*/ { nombre: "2023", descripcion: "" },
      /*7*/ { nombre: "2022", descripcion: "" },
      /*8*/ { nombre: "2022", descripcion: "" },
      /*9*/ { nombre: "2022", descripcion: "" },
      /*10*/ { nombre: "2022", descripcion: "" },
      /*11*/ { nombre: "2021", descripcion: "" },
      /*12*/ { nombre: "2021", descripcion: "" },
      /*13*/ { nombre: "2021", descripcion: "" },
      /*14*/ { nombre: "2021", descripcion: "" },
      /*15*/ { nombre: "2021", descripcion: "" },
      /*16*/ { nombre: "2021", descripcion: "" },
      /*17*/ { nombre: "2021", descripcion: "" },
      /*18*/ { nombre: "2020", descripcion: "" },
      /*19*/ { nombre: "2020", descripcion: "" },
      /*20*/ { nombre: "2020", descripcion: "" },
      /*21*/ { nombre: "2020", descripcion: "" },
      /*22*/ { nombre: "2020", descripcion: "" },
      /*23*/ { nombre: "2020", descripcion: "" },
      /*24*/ { nombre: "2023", descripcion: "" },
      /*25*/ { nombre: "2023", descripcion: "" },
      /*26*/ { nombre: "2023", descripcion: "" },
      /*27*/ { nombre: "2023", descripcion: "" },
      /*28*/ { nombre: "2023", descripcion: "" },
      /*29*/ { nombre: "2023", descripcion: "" },
      /*30*/ { nombre: "2020", descripcion: "" },
      /*31*/ { nombre: "2022", descripcion: "" },
      /*32*/ { nombre: "2022", descripcion: "" },
      /*33*/ { nombre: "2022", descripcion: "" },
      /*34*/ { nombre: "2022", descripcion: "" },
      /*35*/ { nombre: "2021", descripcion: "" },
      /*36*/ { nombre: "2021", descripcion: "" },
      /*37*/ { nombre: "2021", descripcion: "" },
      /*38*/ { nombre: "2021", descripcion: "" },
      /*39*/ { nombre: "2021", descripcion: "" },
      /*40*/ { nombre: "2021", descripcion: "" },
      /*41*/ { nombre: "2020", descripcion: "" },
      /*42*/ { nombre: "2020", descripcion: "" },
      /*43*/ { nombre: "2020", descripcion: "" },
      /*44*/ { nombre: "2020", descripcion: "" },
      /*45*/ { nombre: "2020", descripcion: "" },
      /*46*/ { nombre: "2020", descripcion: "" },
      /*47*/ { nombre: "2023", descripcion: "" },
      /*48*/ { nombre: "2023", descripcion: "" },
      /*48*/ { nombre: "2023", descripcion: "" },
      /*49*/ { nombre: "2023", descripcion: "" },
      /*50*/ { nombre: "2023", descripcion: "" },
      /*51*/ { nombre: "2023", descripcion: "" },
      /*52*/ { nombre: "2023", descripcion: "" },
      /*53*/ { nombre: "2023", descripcion: "" },
      /*54*/ { nombre: "2022", descripcion: "" },
      /*55*/ { nombre: "2022", descripcion: "" },
      /*56*/ { nombre: "2022", descripcion: "" },
      /*57*/ { nombre: "2022", descripcion: "" },
      /*58*/ { nombre: "2021", descripcion: "" },
      /*59*/ { nombre: "2021", descripcion: "" },
      /*60*/ { nombre: "2021", descripcion: "" },
      /*61*/ { nombre: "2021", descripcion: "" },
      /*62*/ { nombre: "2021", descripcion: "" },
      /*63*/ { nombre: "2021", descripcion: "" },
      /*64*/ { nombre: "2020", descripcion: "" },
      /*65*/ { nombre: "2020", descripcion: "" },
      /*66*/ { nombre: "2020", descripcion: "" },
    ];

    galerias.forEach((galeria, index) => {
      const inicio = index * fotosPorGaleria;
      const fin = inicio + fotosPorGaleria;
      const fotosAsignadas = fotosDisponibles.slice(inicio, fin);

      fotosAsignadas.forEach((foto) => {
        const imagen = document.createElement("picture");
        imagen.innerHTML = `
        <div class="contenedor-imagen-galeria">
          <div class="recorte-imagen">
            <source class="foto-galeria" srcset="./build/img/Arte_Original/+1600px/Todas_+1600px/${foto}.webp" type="image/webp" />
            <img class="foto-galeria" src="./build/img/Arte_Original/+1600px/Todas_+1600px/${foto}.png" alt="Galeria Chubbie" />
            <div class="degradado degra-galeria">
              <div class="contenido-galeria">
              <h4>${datosImagenes[foto].nombre}</h3>
              <p>${datosImagenes[foto].descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      `;
        /*<h4>${datosImagenes[foto].nombre}</h3>
        <p>${datosImagenes[foto].descripcion}</p>*/
        imagen.onclick = function () {
          mostrarImagen(foto);
        };

        galeria.appendChild(imagen);
      });
    });
    function mostrarImagen(id) {
      const datosImagenes = [
        { nombre: "null", descripcion: "null" },
        /*1*/ { nombre: "2023", descripcion: "" },
        /*2*/ { nombre: "2023", descripcion: "" },
        /*3*/ { nombre: "2023", descripcion: "" },
        /*4*/ { nombre: "2023", descripcion: "" },
        /*5*/ { nombre: "2023", descripcion: "" },
        /*6*/ { nombre: "2023", descripcion: "" },
        /*7*/ { nombre: "2022", descripcion: "" },
        /*8*/ { nombre: "2022", descripcion: "" },
        /*9*/ { nombre: "2022", descripcion: "" },
        /*10*/ { nombre: "2022", descripcion: "" },
        /*11*/ { nombre: "2021", descripcion: "" },
        /*12*/ { nombre: "2021", descripcion: "" },
        /*13*/ { nombre: "2021", descripcion: "" },
        /*14*/ { nombre: "2021", descripcion: "" },
        /*15*/ { nombre: "2021", descripcion: "" },
        /*16*/ { nombre: "2021", descripcion: "" },
        /*17*/ { nombre: "2021", descripcion: "" },
        /*18*/ { nombre: "2020", descripcion: "" },
        /*19*/ { nombre: "2020", descripcion: "" },
        /*20*/ { nombre: "2020", descripcion: "" },
        /*21*/ { nombre: "2020", descripcion: "" },
        /*22*/ { nombre: "2020", descripcion: "" },
        /*23*/ { nombre: "2020", descripcion: "" },
        /*24*/ { nombre: "2023", descripcion: "" },
        /*25*/ { nombre: "2023", descripcion: "" },
        /*26*/ { nombre: "2023", descripcion: "" },
        /*27*/ { nombre: "2023", descripcion: "" },
        /*28*/ { nombre: "2023", descripcion: "" },
        /*29*/ { nombre: "2023", descripcion: "" },
        /*30*/ { nombre: "2020", descripcion: "" },
        /*31*/ { nombre: "2022", descripcion: "" },
        /*32*/ { nombre: "2022", descripcion: "" },
        /*33*/ { nombre: "2022", descripcion: "" },
        /*34*/ { nombre: "2022", descripcion: "" },
        /*35*/ { nombre: "2021", descripcion: "" },
        /*36*/ { nombre: "2021", descripcion: "" },
        /*37*/ { nombre: "2021", descripcion: "" },
        /*38*/ { nombre: "2021", descripcion: "" },
        /*39*/ { nombre: "2021", descripcion: "" },
        /*40*/ { nombre: "2021", descripcion: "" },
        /*41*/ { nombre: "2020", descripcion: "" },
        /*42*/ { nombre: "2020", descripcion: "" },
        /*43*/ { nombre: "2020", descripcion: "" },
        /*44*/ { nombre: "2020", descripcion: "" },
        /*45*/ { nombre: "2020", descripcion: "" },
        /*46*/ { nombre: "2020", descripcion: "" },
        /*47*/ { nombre: "2023", descripcion: "" },
        /*48*/ { nombre: "2023", descripcion: "" },
        /*48*/ { nombre: "2023", descripcion: "" },
        /*49*/ { nombre: "2023", descripcion: "" },
        /*50*/ { nombre: "2023", descripcion: "" },
        /*51*/ { nombre: "2023", descripcion: "" },
        /*52*/ { nombre: "2023", descripcion: "" },
        /*53*/ { nombre: "2023", descripcion: "" },
        /*54*/ { nombre: "2022", descripcion: "" },
        /*55*/ { nombre: "2022", descripcion: "" },
        /*56*/ { nombre: "2022", descripcion: "" },
        /*57*/ { nombre: "2022", descripcion: "" },
        /*58*/ { nombre: "2021", descripcion: "" },
        /*59*/ { nombre: "2021", descripcion: "" },
        /*60*/ { nombre: "2021", descripcion: "" },
        /*61*/ { nombre: "2021", descripcion: "" },
        /*62*/ { nombre: "2021", descripcion: "" },
        /*63*/ { nombre: "2021", descripcion: "" },
        /*64*/ { nombre: "2020", descripcion: "" },
        /*65*/ { nombre: "2020", descripcion: "" },
        /*66*/ { nombre: "2020", descripcion: "" },
      ];

      const imagen = document.createElement("picture");
      imagen.innerHTML = `
        <div class="overlay-descripcion">
          <picture>
            <source class="img-overlay" srcset="./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/${id}.webp" type="image/webp" />
            <img class="img-overlay" loading="lazy" src="./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/${id}.png" alt="Galeria Chubbie" />
          </picture>
          <div class="mostrador-info">
            <div class="contenido-galeria-overlay">
            <h4>${datosImagenes[id].nombre}</h3>
            <p>${datosImagenes[id].descripcion}</p>
            </div>
          </div>
        </div>
      `;
      /*<h4>${datosImagenes[foto].nombre}</h3>
            <p>${datosImagenes[foto].descripcion}</p>*/
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
  }
}
