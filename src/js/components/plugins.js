import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

export function plugins() {
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  window.Swiper = Swiper;
  window.Autoplay = Autoplay;
  window.EffectFade = EffectFade;
  window.Navigation = Navigation;
}
