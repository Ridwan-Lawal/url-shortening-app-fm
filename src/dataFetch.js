// shortening link

const linkSection = document.querySelector(".link__section");

const linkTemplate = function (data, ogLink) {
  const html = `
    <div
    class=" rounded-md bg-white pt-4 pb-5 md:py-2.5 md:justify-between md:items-center  gap-3 flex flex-col md:flex-row"
  >
    <section class="border-b px-8 pb-4 md:border-none md:pb-0">
      <p class="font-medium text-veryDarkBlue text-lg">
        ${ogLink}
      </p>
    </section>
    <section
      class="flex copy__section md:items-center px-8 flex-col md:flex-row gap-4 md:gap-5"
    >
      <p>
        <a href="${data}" target = '_blank' class="font-medium text-cyan text-lg"
          >${data}</a
        >
      </p>
      <aside>
        <button
          class="py-2 btn__copy font-bold w-full text-lg px-8 text-white bg-cyan hover:bg-sky-300 rounded-md transition-colors cursor-pointer hover:text-white"
        >
          Copy
        </button>
      </aside>
    </section>
  </div>
    `;

  linkSection.insertAdjacentHTML("afterbegin", html);
};

// fetching data for the link inputed
const apiKey = "5fbc223d4b2345c991d83f9bc2dd0058";
export const getShortLink = async function (link) {
  try {
    const res = await fetch("https://api.rebrandly.com/v1/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
      },
      body: JSON.stringify({
        destination: link,
      }),
    });

    if (!res.ok) throw new Error("Something went wrong fetching api");
    const data = await res.json();
    linkTemplate(data.shortUrl, link);
  } catch (err) {
    console.log(err);
    alert(err);
  }
};
