const body = document.querySelector("body");
const header = document.querySelector(".header__content");
const burger = document.querySelector(".header__burger");

burger.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("mobile-nav-visible");
});
