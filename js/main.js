let links = document.querySelectorAll(".link");

links.forEach((e) => {
  e.addEventListener("click", () => {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});

let drop = document.querySelectorAll(".drop");

drop.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});

let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
});

const fixedBtns = document.querySelectorAll(".btnsFixed a");
fixedBtns[2].addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo(0, 0);
});
