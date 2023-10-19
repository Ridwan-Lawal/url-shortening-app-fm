const mainSection = document.querySelector(".main__section");
const nav = document.querySelector("nav");
const mainCoords = mainSection.getBoundingClientRect();

export const stickyNav = function (e) {
  if (window.scrollY > mainCoords.top) {
    nav.classList.add(
      "fixed",
      "bg-white",
      "top-0",
      "py-2",
      "z-10",
      "shadow-md"
    );

    nav.classList.remove("md:max-w-6xl");
  } else {
    nav.classList.remove(
      "fixed",
      "bg-white",
      "top-0",
      "py-2",
      "z-10",
      "md:max-w-6xl",
      "shadow-md"
    );
    nav.classList.add("md:max-w-6xl");
  }
};

export { mainCoords };
