import { addClassName, removeClasses, removeClassName } from "../components/utils.js";

export function info() {
  const buttons = document.querySelectorAll(".main#fleet-inner .info .button");
  const wrappers = document.querySelectorAll(".main#fleet-inner .info__wrapper");
  buttons.forEach((button, ind) => {
    button.addEventListener("click", () => {
      removeClasses(buttons);
      addClassName(button);

      removeClasses(wrappers);
      addClassName(wrappers[ind]);

      ScrollTrigger.refresh();
    });
  });

  const tooltip = document.querySelector(".main#fleet-inner .info__wrapper-tooltip");
  const places = document.querySelectorAll(".main#fleet-inner .info__wrapper-svg rect.place");
  console.log(places.length);

  places.forEach((place) => {
    // place.setAttribute("fill", "black")
    // console.log(place.getAttribute('stroke'));
    place.addEventListener("mousemove", () => {
      if (place.classList.contains(".place-blue")) {
        addClassName(tooltip);
      }
    });
    place.addEventListener("mouseout", () => {
      removeClassName(tooltip);
    });
  });
}
