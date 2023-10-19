"use strict";

const nav = document.querySelector("nav");
const menuClose = document.querySelector(".menu__close");
const menuOpen = document.querySelector(".menu__open");
const linkSection = document.querySelector(".link__section");
const btnShorten = document.querySelector(".btn__shorten");
const mainSection = document.querySelector(".main__section");
// Toggling of the nav on mobile view
// const toggleMenu = function (e, className) {
//   e.target
//     .closest(".hamburger__section")
//     .nextElementSibling.classList.toggle(className);
// };

// nav.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.closest(".menus")) {
//     toggleMenu(e, "py-10");
//     toggleMenu(e, "h-0");
//     toggleMenu(e, "h-fit");
//     toggleMenu(e, "overflow-y-hidden");
//     menuOpen.classList.toggle("hidden");
//     menuClose.classList.toggle("hidden");
//   }
// });

// shortening link

const linkTemplate = function (data) {
  const html = `
  <div
  class="border rounded-md bg-white pt-4 pb-5 md:py-2.5 md:justify-between md:items-center border-black gap-3 flex flex-col md:flex-row"
>
  <section class="border-b px-8 pb-4 md:border-none md:pb-0">
    <p class="font-medium text-veryDarkBlue text-lg">
      Lorem ipsum dolor sit amet consectetur
    </p>
  </section>
  <section
    class="flex md:items-center px-8 flex-col md:flex-row gap-4 md:gap-5"
  >
    <p>
      <a href="" class="font-medium text-cyan text-lg"
        >Lorem, ipsum dolor.</a
      >
    </p>
    <aside>
      <button
        class="py-2 font-bold w-full text-lg px-8 text-white bg-cyan hover:bg-sky-300 rounded-md transition-colors cursor-pointer hover:text-white"
      >
        Copy
      </button>
    </aside>
  </section>
</div>
  `;

  linkSection.insertAdjacentHTML("afterbegin", html);
};

// sticky nav
const mainCoords = mainSection.getBoundingClientRect();
console.log(mainCoords);

window.addEventListener("scroll", (e) => {
  if (window.scrollY > mainCoords.top) {
    nav.classList.add("fixed", "bg-white", "top-0", "py-2", "z-10");

    nav.classList.remove("md:max-w-6xl");
  } else {
    nav.classList.remove(
      "fixed",
      "bg-white",
      "top-0",
      "py-2",
      "z-10",
      "md:max-w-6xl"
    );
    nav.classList.add("md:max-w-6xl");
  }
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
