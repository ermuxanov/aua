import { gsapAnim } from "../components/utils.js";

export function plane() {
  const planeTop = document.querySelector(".plane__top");
  const planeImg = document.querySelector(".plane__img");

  gsap.to(planeImg, {
    scale: 1,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: planeTop,
      start: "center bottom",
      end: "top top",
      scrub: true,
    },
  });
  
  gsapAnim(".plane__card-item", 50, 25);
}
