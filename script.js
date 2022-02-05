const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const body = document.querySelector("body");
open.addEventListener("click", () => container.classList.add("show-nav"));
open.addEventListener("click", () => body.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));
close.addEventListener("click", () => body.classList.remove("show-nav"));

//scroll top//

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);
