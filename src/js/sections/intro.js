export function intro() {
  let swiper = new Swiper(".intro__block-swiper", {
    // effect: "fade",
    // spaceBetween: 30,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      prevEl: ".intro__block-navigation-prev",
      nextEl: ".intro__block-navigation-next",
    },
  });
}
