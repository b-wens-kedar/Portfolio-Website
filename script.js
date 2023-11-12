new Splide("#activities-Splide", {
  type: "loop",
  drag: "free",
  arrows: false,
  fixedHeight: "75vh",
  perMove: 1,
  snap: true,
  gap: "5vh",
  padding: "14.5vh",
  pagination: "",
  wheel: true,
  autoScroll: {
    speed: 0.4,
    autoStart: true,
  },
}).mount(window.splide.Extensions);

new Splide("#awards-Splide", {
  type: "loop",
  drag: "free",
  arrows: false,
  fixedHeight: "80vh",
  perPage: 2,
  snap: true,
  gap: "5vh",
  padding: "35vh",
  pagination: "",
  wheel: true,
  autoScroll: {
    speed: 0.4,
    autoStart: true,
  },
  breakpoints: {
    950: {
      perPage: 2,
    },
    500: {
      perPage: 1,
    },
  },
}).mount(window.splide.Extensions);
