import { addClassName, removeClasses } from "../components/utils.js";

export function comfort() {
  const texts = document.querySelectorAll(".comfort__left-item");
  const images = document.querySelectorAll(".comfort__right-img");
  const section = document.querySelector(".comfort");
  const sectionInner = document.querySelector(".comfort__inner");
  const space = 0.5 * window.innerHeight;
  const header = document.querySelector(".header");

  sectionInner.style.height = `${window.innerHeight - header.offsetHeight}px`;
  sectionInner.style.top = `${header.offsetHeight}px`;

  texts.forEach((item, ind) => {
    if (ind !== 0) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".comfort__inner",
          start: `${((section.offsetHeight - 2 * space) / (texts.length - 1)) * (ind - 1) + space} ${
            header.offsetHeight
          }px`,
          end: "+=1",
          scrub: true,

          onEnter: () => {
            removeClasses(texts);
            addClassName(item);
            removeClasses(images);
            addClassName(images[ind]);
            gsap.to(texts, {
              yPercent: -100 * ind,
            });
          },
          onLeaveBack: () => {
            removeClasses(texts);
            addClassName(texts[ind - 1]);
            removeClasses(images);
            addClassName(images[ind - 1]);
            gsap.to(texts, {
              yPercent: -100 * (ind - 1),
            });
          },
        },
      });
    }
  });
}
