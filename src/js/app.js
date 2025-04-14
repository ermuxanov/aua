import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { header } from "./components/header.js";
import { intro } from "./sections/intro.js";
import { plane } from "./sections/plane.js";
import { comfort } from "./sections/comfort.js";
import { footer } from "./components/footer.js";
import { food } from "./components/food.js";
import { info } from "./sections/info.js";
import { animal } from "./sections/animal.js";

window.addEventListener("load", () => {
  plugins();
  Swiper.use([Navigation, EffectFade, Autoplay]);
  header();
  footer();

  // main page
  intro();
  plane();
  comfort();

  // about page
  food();

  // fleet-inner page
  info();

  // animal page
  animal();
});
