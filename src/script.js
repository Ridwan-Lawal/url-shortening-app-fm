"use strict";

const nav = document.querySelector("nav");
const menuClose = document.querySelector(".menu__close");
const menuOpen = document.querySelector(".menu__open");
// Toggling of the nav on mobile view
const toggleMenu = function (e, className) {
  e.target
    .closest(".hamburger__section")
    .nextElementSibling.classList.toggle(className);
};

nav.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".menus")) {
    toggleMenu(e, "py-10");
    toggleMenu(e, "h-0");
    toggleMenu(e, "h-fit");
    toggleMenu(e, "overflow-y-hidden");
    menuOpen.classList.toggle("hidden");
    menuClose.classList.toggle("hidden");
  }
});
