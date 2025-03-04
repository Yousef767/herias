const imgC = document.querySelectorAll(".imgC img");
const imagePopUp = document.querySelector(".imagePopUp");
const imageP = document.querySelector(".imagePopInner img");
const x = document.querySelector(".imagePopInner i");

imgC.forEach((e)=>{
  e.addEventListener("click", () => {
    imageP.src = e.src;
    imagePopUp.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

})
x.addEventListener("click", () => {
  imagePopUp.style.display = "none";
  document.body.style.overflow = "initial";
});

imagePopUp.addEventListener("click", (event) => {
  if (event.target.className === "imagePopUp") {
    imagePopUp.style.display = "none";
    document.body.style.overflow = "initial";
  }
});
