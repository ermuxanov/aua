import { addClassName, removeClasses } from "../components/utils.js";

export function info() {
  const buttons = document.querySelectorAll(".main#fleet-inner .info .button");
  const wrappers = document.querySelectorAll(".main#fleet-inner .info__wrapper");
  buttons.forEach((button, ind) => {
    button.addEventListener("click", () => {
      removeClasses(buttons);
      addClassName(button);

      removeClasses(wrappers);
      addClassName(wrappers[ind]);
    });
  });
}
