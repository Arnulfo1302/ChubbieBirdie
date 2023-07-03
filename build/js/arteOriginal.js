function iniciarApp() {
  crearGaleria(filtro);
  filtroActual(filtro);
}
// Filtro Actual
function filtroActual(filtro) {
  const galerias = [
    ".filtro-todas",
    ".filtro-2023",
    ".filtro-2022",
    ".filtro-2021",
    ".filtro-2020"
  ];
  galerias.forEach((galeria) => {
    const divElement = document.querySelector(galeria);
    divElement.classList.remove('filtro-actual')
  });
  if(filtro == 999){
    document.querySelector(".filtro-todas").classList.add('filtro-actual');
  } else if(filtro == 2023){
    document.querySelector(".filtro-2023").classList.add('filtro-actual');
  } else if(filtro == 2022){
    document.querySelector(".filtro-2022").classList.add('filtro-actual');
  }else if(filtro == 2021){
    document.querySelector(".filtro-2021").classList.add('filtro-actual');
  } else if(filtro == 2020){
    document.querySelector(".filtro-2020").classList.add('filtro-actual');
  }
}
document.addEventListener("DOMContentLoaded", iniciarApp);
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
//Filtracion de galerias
function limpiarGalerias() {
  const galerias = [
    ".galeria-arteoriginalA",
    ".galeria-arteoriginalB",
    ".galeria-arteoriginalC"
  ];
  galerias.forEach((galeria) => {
    const divElement = document.querySelector(galeria);
    while (divElement.firstChild) {
      divElement.removeChild(divElement.firstChild);
    }
  });
};
let filtro = '999';
function filtrarGalerias(filtrar){
limpiarGalerias();
filtro = String(filtrar);
crearGaleria(filtro);
filtroActual(filtro);
};
// Creacion de galerias
function crearGaleria(filtro) {
  const datosImagenes = [
  
//-------------------2023---------------
/*1*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/1.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/1.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/1.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/1.png'},
/*2*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/2.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/2.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/2.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/2.png'},
/*3*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/3.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/3.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/3.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/3.png'},
/*4*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/4.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/4.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/4.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/4.png'},
/*5*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/5.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/5.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/5.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/5.png'},
/*6*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/6.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/6.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/6.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/6.png'},
/*7*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/7.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/7.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/7.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/7.png'},
/*8*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/8.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/8.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/8.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/8.png'},
/*9*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/9.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/9.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/9.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/9.png'},
/*10*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/10.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/10.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/10.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/10.png'},
/*11*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/11.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/11.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/11.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/11.png'},
/*12*/{ fecha: "2023", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/12.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/12.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/12.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/12.png'},
//-------------------2022---------------
/*13*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/13.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/13.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/13.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/13.png'},
/*14*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/14.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/14.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/14.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/14.png'},
/*15*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/15.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/15.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/15.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/15.png'},
/*16*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/16.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/16.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/16.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/16.png'},
/*17*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/17.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/17.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/17.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/17.png'},
/*18*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/18.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/18.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/18.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/18.png'},
/*19*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/19.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/19.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/19.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/19.png'},
/*20*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/20.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/20.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/20.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/20.png'},
/*21*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/21.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/21.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/21.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/21.png'},
/*22*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/22.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/22.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/22.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/22.png'},
/*23*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/23.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/23.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/23.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/23.png'},
/*24*/{ fecha: "2022", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/24.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/24.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/24.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/24.png'},
//-------------------2021---------------
/*25*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/25.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/25.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/25.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/25.png'},
/*26*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/26.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/26.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/26.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/26.png'},
/*27*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/27.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/27.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/27.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/27.png'},
/*28*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/28.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/28.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/28.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/28.png'},
/*29*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/29.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/29.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/29.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/29.png'},
/*30*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/30.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/30.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/30.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/30.png'},
/*31*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/31.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/31.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/31.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/31.png'},
/*32*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/32.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/32.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/32.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/32.png'},
/*33*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/33.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/33.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/33.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/33.png'},
/*34*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/34.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/34.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/34.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/34.png'},
/*35*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/35.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/35.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/35.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/35.png'},
/*36*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/36.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/36.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/36.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/36.png'},
/*37*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/37.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/37.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/37.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/37.png'},
/*38*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/38.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/38.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/38.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/38.png'},
/*39*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/39.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/39.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/39.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/39.png'},
/*40*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/40.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/40.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/40.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/40.png'},
/*41*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/41.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/41.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/41.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/41.png'},
/*42*/{ fecha: "2021", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/42.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/42.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/42.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/42.png'},
//-------------------2020---------------
/*43*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/43.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/43.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/43.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/43.png'},
/*44*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/44.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/44.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/44.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/44.png'},
/*45*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/45.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/45.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/45.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/45.png'},
/*46*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/46.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/46.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/46.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/46.png'},
/*47*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/47.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/47.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/47.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/47.png'},
/*48*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/48.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/48.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/48.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/48.png'},
/*49*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/49.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/49.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/49.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/49.png'},
/*50*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/50.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/50.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/50.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/50.png'},
/*51*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/51.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/51.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/51.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/51.png'},
/*52*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/52.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/52.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/52.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/52.png'},
/*53*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/53.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/53.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/53.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/53.png'},
/*54*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/54.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/54.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/54.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/54.png'},
/*55*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/55.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/55.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/55.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/55.png'},
/*56*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/56.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/56.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/56.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/56.png'},
/*57*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/57.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/57.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/57.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/57.png'},
/*58*/{ fecha: "2020", descripcion: "", srcw:'./build/img/Arte_Original/+1600px/Todas_+1600px/58.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/58.webp',srcp:'./build/img/Arte_Original/+1600px/Todas_+1600px/58.png',srcpf:'./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/58.png'},

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
    if(filtro != 999){
      if(datosImagenes[i].fecha === filtro){
        galerias[columna].appendChild(imagen);
      };
    }else if(filtro == 999){
      galerias[columna].appendChild(imagen);
    };
    imagen.onclick = function () {
      mostrarImagen(i + 1);
    };
  };
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
}
