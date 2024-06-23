const headers = document.querySelectorAll(".faq ul li .header");
let lastActiveHeader = undefined;

headers.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    if (!lastActiveHeader) {
      header.nextElementSibling.style.maxHeight =
        header.nextElementSibling.scrollHeight + "px";
      lastActiveHeader = header;
    } else if (header == lastActiveHeader) {
      header.nextElementSibling.style.maxHeight = 0;
      lastActiveHeader = undefined;
    } else {
      lastActiveHeader.classList.toggle("active");
      lastActiveHeader.nextElementSibling.style.maxHeight = 0;
      header.nextElementSibling.style.maxHeight =
        header.nextElementSibling.scrollHeight + "px";
      lastActiveHeader = header;
    }
  });
});
