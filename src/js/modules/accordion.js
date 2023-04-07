export function swipe () {
	const accordionItems = document.querySelectorAll(".accordion__item");
	const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion__header");
  const content = item.querySelector(".content");

  header.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    accordionItems.forEach((otherItem) => {
      otherItem.classList.remove("open");
	  header.classList.remove("clicked");
	  accordionHeaders.forEach((otherItem) => {
		otherItem.classList.remove("clicked");
	  })
      otherItem.querySelector(".content").style.maxHeight = "0";
    });

    if (!isOpen) {
      item.classList.add("open");
	  header.classList.add("clicked");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
}

