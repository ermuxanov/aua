import { gsapAnim } from "../components/utils.js";

export function passenger() {
  const counter = document.querySelector(".passenger__nums span");

  gsap.set(counter, {
    y: `100px`,
    autoAlpha: 0,
  });

  gsap.to(counter, {
    scrollTrigger: {
      trigger: counter,
      start: `top bottom`,
      end: "+=1",
      scrub: true,
      onEnter: () => {
        gsap.to(counter, {
          autoAlpha: 1,
          y: 0,
        });
        gsap.to(counter, {
          innerText: counter.dataset.count,
          duration: 1.5,
          modifiers: {
            innerText: function (innerText) {
              return gsap.utils
                .snap(2, innerText)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
          },
        });
      },
      onLeaveBack: () => {
        gsap.to(counter, {
          autoAlpha: 0,
          y: `100px`,
        });
      },
    },
  });

  gsapAnim([".passenger__nums p", ".passenger__top", ".passenger__text", ".passenger__card"], 100);
}
