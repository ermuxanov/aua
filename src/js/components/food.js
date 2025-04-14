import { addClassName, removeClasses, removeClassName } from "./utils.js";

export function food() {
  const buttons = document.querySelectorAll(".food .button");
  const wrappers = document.querySelectorAll(".food__class-wrapper");
  buttons.forEach((button, ind) => {
    button.addEventListener("click", () => {
      removeClasses(buttons);
      addClassName(button);
      wrappers.forEach((wrapper) => {
        const items = wrapper.querySelectorAll(".food__class-item");
        removeClasses(items);
        addClassName(items[ind]);
      });
    });
  });
}
