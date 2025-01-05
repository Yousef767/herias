let links = document.querySelectorAll(".link");

links.forEach((e) => {
  e.addEventListener("click", () => {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});

// let drop = document.querySelectorAll(".drop");

// drop.forEach((e) => {
//   e.addEventListener("click", () => {
//     e.classList.toggle("active");
//   });
// });

let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
});

let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
  const footer = document.querySelector("footer");
  const btnsFixed = document.querySelector(".btnsFixed");
  const footerOffsetTop = footer.offsetTop;
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  if (btnsFixed) {
    if (scrollY + windowHeight >= footerOffsetTop) {
      btnsFixed.style.display = "none";
    } else {
      // Check if the user is scrolling up
      if (scrollY < lastScrollPosition) {
        btnsFixed.style.display = "flex";
      } else {
        btnsFixed.style.display = "none";
      }
    }
  }

  lastScrollPosition = scrollY;
  
});
