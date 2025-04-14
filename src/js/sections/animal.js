import { addClassName, removeClasses } from "../components/utils.js";

export function animal() {
  const buttons = document.querySelectorAll(".main#animal .transport-animal .button");
  const wrappers = document.querySelectorAll(".main#animal .transport-animal__wrap");
  buttons.forEach((button, ind) => {
    button.addEventListener("click", () => {
      removeClasses(buttons);
      addClassName(button);

      removeClasses(wrappers);
      addClassName(wrappers[ind]);
    });
  });
}
