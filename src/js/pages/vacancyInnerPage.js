import { addClassName, gsapAnim, removeClasses, toggleClassName } from "../components/utils.js";

export function vacancyInnerPage(page) {
  if (page === "vacancy-inner") {
    const btn = document.querySelector(".vacancy__block-btn");
    const wrapper = document.querySelector(".vacancy__block-wrap");
    const btnText = document.querySelectorAll(".vacancy__block-btn span");

    btn.addEventListener("click", () => {
      toggleClassName(wrapper);
      toggleClassName(btnText);
    });
  }
}
