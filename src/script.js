import { stickyNav, mainCoords } from "./stickyNav.js";
import { getShortLink } from "./dataFetch.js";
import { linkSectionClick } from "./linkCopy.js";

const nav = document.querySelector("nav");
const menuClose = document.querySelector(".menu__close");
const menuOpen = document.querySelector(".menu__open");
const inputLink = document.querySelector(".input__link");
const btnShorten = document.querySelector(".btn__shorten");
const linkSection = document.querySelector(".link__section");

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

// sticky nav
window.addEventListener("scroll", (e) => {
  stickyNav(e);
});

// smooth scrolling
nav.addEventListener("click", (e) => {
  if (e.target.closest(".link")) {
    e.preventDefault();
    const getId = e.target.getAttribute("href");
    document.querySelector(`${getId}`).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// btn shortening
btnShorten.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputLink.value) return;
  getShortLink(inputLink.value);
  inputLink.value = "";
});

// link copying to clipboard visit linkCopy.js to see full code
linkSection.addEventListener("click", (e) => {
  linkSectionClick(e);
});
