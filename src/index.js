import { helloworld } from "./helloworld.js";

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("output");
  if (el) {
    el.textContent = helloworld();
  }
});