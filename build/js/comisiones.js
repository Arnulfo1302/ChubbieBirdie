let previousWidth=window.innerWidth;function iniciarApp(){crearGaleria()}function crearGaleria(){const e=window.innerWidth;let i;if(e<=664){i=document.querySelectorAll(".galeria-arteoriginalA");const e=32,o=Math.ceil(e/i.length),c=Array.from({length:e},(e,i)=>i+1),r=[{nombre:"null",descripcion:"null"},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""}];function n(e){const i=[{nombre:"null",descripcion:"null"},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""}],n=document.createElement("picture");n.innerHTML=`\n        <div class="overlay-descripcion">\n          <picture>\n            <source class="img-overlay" srcset="./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/${e}.webp" type="image/webp" />\n            <img class="img-overlay" loading="lazy" src="./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/${e}.png" alt="Galeria Chubbie" />\n          </picture>\n          <div class="mostrador-info">\n            <div class="contenido-galeria-overlay">\n            <h4>${i[e].nombre}</h3>\n            <p>${i[e].descripcion}</p>\n            </div>\n          </div>\n        </div>\n      `;const o=document.createElement("div");o.classList.add("overlay"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),o.remove()};const c=document.createElement("p");c.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),o.remove()},o.appendChild(n),o.appendChild(c);const r=document.querySelector("body");r.appendChild(o),r.classList.add("fijar-body")}i.forEach((e,i)=>{const s=i*o,d=s+o;c.slice(s,d).forEach(i=>{const o=document.createElement("picture");o.innerHTML=`\n        <div class="contenedor-imagen-galeria">\n          <div class="recorte-imagen">\n            <source class="foto-galeria" srcset="./build/img/Comisiones/+1600px/Todas_+1600px/${i}.webp" type="image/webp" />\n            <img class="foto-galeria" src="./build/img/Comisiones/+1600px/Todas_+1600px/${i}.png" alt="Galeria Chubbie" />\n            <div class="degradado degra-galeria">\n              <div class="contenido-galeria">\n              <h4>${r[i].nombre}</h3>\n              <p>${r[i].descripcion}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      `,o.onclick=function(){n(i)},e.appendChild(o)})})}else if(e<1600){i=document.querySelectorAll(".galeria-arteoriginalA, .galeria-arteoriginalB");const e=32,o=Math.ceil(e/i.length),c=Array.from({length:e},(e,i)=>i+1),r=[{nombre:"null",descripcion:"null"},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""}];function n(e){const i=[{nombre:"null",descripcion:"null"},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""}],n=document.createElement("picture");n.innerHTML=`\n        <div class="overlay-descripcion">\n          <picture>\n            <source class="img-overlay" srcset="./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/${e}.webp" type="image/webp" />\n            <img class="img-overlay" loading="lazy" src="./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/${e}.png" alt="Galeria Chubbie" />\n          </picture>\n          <div class="mostrador-info">\n            <div class="contenido-galeria-overlay">\n            <h4>${i[e].nombre}</h3>\n            <p>${i[e].descripcion}</p>\n            </div>\n          </div>\n        </div>\n      `;const o=document.createElement("div");o.classList.add("overlay"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),o.remove()};const c=document.createElement("p");c.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),o.remove()},o.appendChild(n),o.appendChild(c);const r=document.querySelector("body");r.appendChild(o),r.classList.add("fijar-body")}i.forEach((e,i)=>{const s=i*o,d=s+o;c.slice(s,d).forEach(i=>{const o=document.createElement("picture");o.innerHTML=`\n        <div class="contenedor-imagen-galeria">\n          <div class="recorte-imagen">\n            <source class="foto-galeria" srcset="./build/img/Comisiones/+1600px/Todas_+1600px/${i}.webp" type="image/webp" />\n            <img class="foto-galeria" src="./build/img/Comisiones/+1600px/Todas_+1600px/${i}.png" alt="Galeria Chubbie" />\n            <div class="degradado degra-galeria">\n              <div class="contenido-galeria">\n              <h4>${r[i].nombre}</h3>\n              <p>${r[i].descripcion}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      `,o.onclick=function(){n(i)},e.appendChild(o)})})}else{i=document.querySelectorAll(".galeria-arteoriginalA, .galeria-arteoriginalB, .galeria-arteoriginalC");const e=32,o=Math.ceil(e/i.length),c=Array.from({length:e},(e,i)=>i+1),r=[{nombre:"null",descripcion:"null"},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""}];function n(e){const i=[{nombre:"null",descripcion:"null"},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2021",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2023",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""},{nombre:"2022",descripcion:""}],n=document.createElement("picture");n.innerHTML=`\n        <div class="overlay-descripcion">\n          <picture>\n            <source class="img-overlay" srcset="./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/${e}.webp" type="image/webp" />\n            <img class="img-overlay" loading="lazy" src="./build/img/Comisiones/+1600px/Todas_+1600px-fullsize/${e}.png" alt="Galeria Chubbie" />\n          </picture>\n          <div class="mostrador-info">\n            <div class="contenido-galeria-overlay">\n            <h4>${i[e].nombre}</h3>\n            <p>${i[e].descripcion}</p>\n            </div>\n          </div>\n        </div>\n      `;const o=document.createElement("div");o.classList.add("overlay"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),o.remove()};const c=document.createElement("p");c.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),o.remove()},o.appendChild(n),o.appendChild(c);const r=document.querySelector("body");r.appendChild(o),r.classList.add("fijar-body")}i.forEach((e,i)=>{const s=i*o,d=s+o;c.slice(s,d).forEach(i=>{const o=document.createElement("picture");o.innerHTML=`\n        <div class="contenedor-imagen-galeria">\n          <div class="recorte-imagen">\n            <source class="foto-galeria" srcset="./build/img/Comisiones/+1600px/Todas_+1600px/${i}.webp" type="image/webp" />\n            <img class="foto-galeria" src="./build/img/Comisiones/+1600px/Todas_+1600px/${i}.png" alt="Galeria Chubbie" />\n            <div class="degradado degra-galeria">\n              <div class="contenido-galeria">\n              <h4>${r[i].nombre}</h3>\n              <p>${r[i].descripcion}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      `,o.onclick=function(){n(i)},e.appendChild(o)})})}}window.addEventListener("resize",(function(){const e=window.innerWidth;(previousWidth<=1599&&previousWidth>=665&&e<=664&&e>=1||previousWidth<=664&&previousWidth>=1&&e<=1600&&e>=665||previousWidth<=1600&&e>=1601||previousWidth>=1600&&e<=1599)&&location.reload(),previousWidth=e})),document.addEventListener("DOMContentLoaded",iniciarApp);