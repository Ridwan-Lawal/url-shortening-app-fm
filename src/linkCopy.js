const copyToClipboard = async function (text) {
  try {
    const res = await navigator.clipboard.writeText(text);
    console.log(text);
  } catch (err) {
    alert(err);
  }
};

export const linkSectionClick = function (e) {
  if (e.target.classList.contains("btn__copy")) {
    const shortLinkToCopy =
      e.target.closest(".copy__section").firstElementChild.firstElementChild
        .textContent;

    copyToClipboard(shortLinkToCopy);
  }
};
