// Select element function
const selectElement = (element) => {
  return document.querySelector(element);
};

let menuToggle = selectElement(".nav__menu-toggle");
let nav = selectElement(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
