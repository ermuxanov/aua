import { gsapAnim, removeClasses, toggleClassName } from "../components/utils.js";

export function news() {
  const button = document.querySelector(".news__btn");
  const buttonTexts = document.querySelectorAll(".news__btn-text");
  const newsGrid = document.querySelector(".news__grid");
  button.addEventListener("click", () => {
    buttonTexts.forEach((buttonText) => {
      toggleClassName(buttonText);
    });
    toggleClassName(newsGrid, "show");
    ScrollTrigger.refresh();
  });

  gsapAnim(".news__grid-item", 100, 50);
}
