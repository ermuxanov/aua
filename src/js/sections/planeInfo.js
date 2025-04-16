import { addClassName, removeClasses, removeClassName } from "../components/utils.js";

export function planeInfo() {
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

  const wrapperTab = document.querySelector(".main#fleet-inner .info__tab");
  const tooltip = document.querySelector(".main#fleet-inner .info__wrapper-tooltip");
  const tooltipImg = document.querySelectorAll(".main#fleet-inner .tooltip__img img");
  const tooltipNum = document.querySelectorAll(".main#fleet-inner .tooltip__num span");
  const places = document.querySelectorAll(".main#fleet-inner .info__wrapper-svg rect.place");

  places.forEach((place) => {
    let attr = place.dataset.place;

    place.addEventListener("mouseover", (e) => {
      addClassName(tooltip);
      tooltip.style.transform = `translate(${e.pageX - tooltip.offsetWidth / 2}px,${
        e.pageY - wrapperTab.offsetTop - tooltip.offsetHeight
      }px)`;
      tooltipImg.forEach((img, ind) => {
        if (img.dataset.placeImg === attr) {
          removeClasses(tooltipImg);
          addClassName(img);

          removeClasses(tooltipNum);
          addClassName(tooltipNum[ind]);
        }
      });
    });
    place.addEventListener("mouseout", () => {
      removeClassName(tooltip);
    });
  });

  gsap.to(".info__wrapper-img", {
    transform: `translate(0%, 0)`,
    scrollTrigger: {
      trigger: ".info__wrapper-img",
      start: "top bottom",
      end: "bottom+=20% bottom",
      scrub: 1,
    },
  });
}
