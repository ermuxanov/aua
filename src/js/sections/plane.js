export function plane() {
  const planeTop = document.querySelector(".plane__top");
  const planeImg = document.querySelector(".plane__img");
  console.log(planeTop.offsetHeight, planeImg.offsetHeight);

  // console.log(planeTop.offsetHeight);

  gsap.to(".plane__img", {
    scale: 1,
    autoAlpha: 1,
    // y: planeTop.offsetHeight - planeImg.offsetHeight,
    // yPercent: 15,
    scrollTrigger: {
      trigger: ".plane__top",
      start: "center bottom",
      end: "top top",
      scrub: true,
    },
  });
}
