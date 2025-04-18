export function footer() {
  const plane = document.querySelector(".footer__plane img");

  gsap.to(".footer__plane img", {
    x: `${-(window.innerWidth - plane.offsetWidth) * 0.5}`,
    // xPercent: -150,
    scrollTrigger: {
      trigger: ".footer",
      start: "top+=200 bottom",
      end: "bottom bottom",
      scrub: 1,
    },
  });
}
