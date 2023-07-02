let previousWidth = window.innerWidth;
function iniciarApp() {
  crearGaleria();
}
function crearGaleria() {
  const i = [
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/1.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/1.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/1.png",
        srcpf: "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/1.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/2.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/2.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/2.png",
        srcpf: "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/2.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/3.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/3.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/3.png",
        srcpf: "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/3.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/4.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/4.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/4.png",
        srcpf: "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/4.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/5.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/5.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/5.png",
        srcpf: "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/5.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/6.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/6.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/6.png",
        srcpf: "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/6.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/7.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/7.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/7.png",
        srcpf: "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/7.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/8.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/8.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/8.png",
        srcpf: "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/8.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/9.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/9.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/9.png",
        srcpf: "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/9.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/10.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/10.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/10.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/10.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/11.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/11.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/11.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/11.png",
      },
      {
        fecha: "2023",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/12.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/12.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/12.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/12.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/13.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/13.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/13.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/13.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/14.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/14.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/14.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/14.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/15.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/15.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/15.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/15.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/16.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/16.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/16.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/16.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/17.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/17.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/17.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/17.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/18.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/18.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/18.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/18.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/19.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/19.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/19.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/19.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/20.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/20.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/20.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/20.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/21.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/21.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/21.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/21.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/22.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/22.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/22.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/22.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/23.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/23.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/23.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/23.png",
      },
      {
        fecha: "2022",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/24.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/24.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/24.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/24.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/25.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/25.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/25.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/25.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/26.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/26.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/26.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/26.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/27.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/27.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/27.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/27.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/28.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/28.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/28.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/28.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/29.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/29.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/29.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/29.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/30.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/30.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/30.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/30.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/31.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/31.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/31.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/31.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/32.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/32.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/32.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/32.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/33.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/33.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/33.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/33.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/34.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/34.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/34.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/34.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/35.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/35.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/35.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/35.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/36.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/36.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/36.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/36.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/37.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/37.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/37.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/37.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/38.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/38.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/38.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/38.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/39.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/39.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/39.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/39.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/40.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/40.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/40.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/40.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/41.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/41.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/41.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/41.png",
      },
      {
        fecha: "2021",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/42.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/42.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/42.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/42.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/43.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/43.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/43.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/43.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/44.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/44.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/44.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/44.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/45.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/45.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/45.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/45.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/46.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/46.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/46.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/46.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/47.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/47.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/47.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/47.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/48.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/48.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/48.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/48.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/49.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/49.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/49.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/49.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/50.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/50.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/50.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/50.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/51.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/51.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/51.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/51.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/52.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/52.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/52.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/52.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/53.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/53.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/53.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/53.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/54.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/54.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/54.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/54.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/55.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/55.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/55.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/55.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/56.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/56.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/56.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/56.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/57.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/57.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/57.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/57.png",
      },
      {
        fecha: "2020",
        descripcion: "",
        srcw: "./build/img/Arte_Original/+1600px/Todas_+1600px/58.webp",
        srcpwf:
          "./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/58.webp",
        srcp: "./build/img/Arte_Original/+1600px/Todas_+1600px/58.png",
        srcpf:
          "./build/img/Arte_original/+1600px/Todas_+1600px-fullsize/58.png",
      },
    ],
    p = window.innerWidth;
  let r;
  r =
    p <= 664
      ? document.querySelectorAll(".galeria-arteoriginalA")
      : p < 1600
      ? document.querySelectorAll(
          ".galeria-arteoriginalA, .galeria-arteoriginalB"
        )
      : document.querySelectorAll(
          ".galeria-arteoriginalA, .galeria-arteoriginalB, .galeria-arteoriginalC"
        );
  const l = parseInt(i.length);
  let e = r.length;
  console.log(l);
  let s = 0;
  for (let p = 1; p <= l; p++) {
    for (let e = 0; e < r.length; e++) {
      const g = document.createElement("picture");
      if (
        ((g.innerHTML = `\n      <div class="contenedor-imagen-galeria">\n        <div class="recorte-imagen">\n          <source class="foto-galeria" srcset="${
          i[p - 1].srcw
        }" type="image/webp" />\n          <img class="foto-galeria" src="${
          i[p - 1].srcp
        }" alt="Galeria Chubbie" />\n          <div class="degradado degra-galeria">\n            <div class="contenido-galeria">\n            <h4>${
          i[p - 1].fecha
        }</h3>\n            <p>${
          i[p - 1].descripcion
        }</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    `),
        r[e].appendChild(g),
        (g.onclick = function () {
          console.log("onclikc =" + p + " aux= " + s + " galeria= " + e),
            (s =
              0 == e && p != l
                ? 2
                : 2 == e || (1 == e && p == l) || (p == l && 0 == e)
                ? 0
                : 1),
            a(p - s);
        }),
        p + 1 == l + 1)
      )
        break;
      (p += 1), console.log("1 " + p);
    }
    p != l && (p -= 1),
      console.log("2 " + p),
      p == l && e > 1 && ((e = 1), (p -= 1), console.log("galerias = " + e)),
      console.log("3 " + p);
  }
  function a(p) {
    const r = document.createElement("picture");
    r.innerHTML = `\n        <div class="overlay-descripcion">\n          <picture>\n            <source class="img-overlay" srcset="${
      i[p - 1].srcpwf
    }" type="image/webp" />\n            <img class="img-overlay" loading="lazy" src="${
      i[p - 1].srcpf
    }" alt="Galeria Chubbie" />\n          </picture>\n          <div class="mostrador-info">\n            <div class="contenido-galeria-overlay">\n            <h4>${
      i[p - 1].fecha
    }</h3>\n            <p>${
      i[p - 1].descripcion
    }</p>\n            </div>\n          </div>\n        </div>\n      `;
    const l = document.createElement("div");
    l.classList.add("overlay"),
      (l.onclick = function () {
        document.querySelector("body").classList.remove("fijar-body"),
          l.remove();
      });
    const e = document.createElement("p");
    (e.onclick = function () {
      document.querySelector("body").classList.remove("fijar-body"), l.remove();
    }),
      l.appendChild(r),
      l.appendChild(e);
    const s = document.querySelector("body");
    s.appendChild(l), s.classList.add("fijar-body");
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
