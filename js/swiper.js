var swiper = new Swiper(".swiperHome", {
  slidesPerView: 1,
  speed:400,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});



var swiper3 = new Swiper(".catswiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  speed:400,
  pagination: {
    el: ".swiper-pagination2",
    clickable:true,
  },
  navigation: {
    prevEl: "#arrowPrev",
    nextEl: "#arrowNext",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 2.5,
    },
    1150: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 3,
    },
  },
});
var swiper3 = new Swiper(".catswiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  speed:400,
  pagination: {
    el: ".swiper-pagination3",
    clickable:true,
  },
  navigation: {
    prevEl: "#arrowPrev2",
    nextEl: "#arrowNext2",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 2.5,
    },
    1150: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView:3,
    },
  },
});

var swiper3 = new Swiper(".imagesSlider2", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  speed:400,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 2.5,
    },
    1150: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
  },
});

