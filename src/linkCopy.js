const copyToClipboard = async function (text) {
  try {
    const res = await navigator.clipboard.writeText(text);
    console.log(text);
  } catch (err) {
    alert(err);
  }
};

const changingBtnColor = function (class1, class2, class3) {};

export const linkSectionClick = function (e) {
  if (e.target.classList.contains("btn__copy")) {
    const shortLinkToCopy =
      e.target.closest(".copy__section").firstElementChild.firstElementChild
        .textContent;

    // changing the color of the btn and text when clicked
    e.target.classList.remove("bg-cyan", "hover:bg-sky-300");
    e.target.classList.add("bg-darkViolet");
    e.target.textContent = "Copied!";

    //    returning it the btn to its default style and content after 3s
    setTimeout(() => {
      e.target.classList.remove("bg-darkViolet");
      e.target.classList.add("bg-cyan", "hover:bg-sky-300");
      e.target.textContent = "Copy";
    }, 3000);

    console.log(e.target);
    copyToClipboard(shortLinkToCopy);
  }
};
