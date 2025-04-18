import { addClassName, gsapAnim, removeClasses } from "../components/utils.js";

export function animal() {
  const buttons = document.querySelectorAll(".main#animal .transport-animal .button");
  const wrappers = document.querySelectorAll(".main#animal .transport-animal__wrap");
  buttons.forEach((button, ind) => {
    button.addEventListener("click", () => {
      removeClasses(buttons);
      addClassName(button);

      removeClasses(wrappers);
      addClassName(wrappers[ind]);

      ScrollTrigger.refresh();
    });
  });

  gsapAnim(
    [
      ".transport-animal__heading",
      ".transport-animal__img",
      ".transport-animal__text",
      ".transport-animal__wrap-heading",
      ".transport-animal__wrap-text",
      ".transport-animal__wrap-right",
      ".transport-type__heading",
      ".transport-type__wrapper",
    ],
    100
  );
  gsapAnim(".transport-animal .button", 20);
}
