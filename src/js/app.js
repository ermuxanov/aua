import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { header } from "./components/header.js";
import { intro } from "./sections/intro.js";
import { plane } from "./sections/plane.js";
import { comfort } from "./sections/comfort.js";
import { footer } from "./components/footer.js";

window.addEventListener("load", () => {
  plugins();
  Swiper.use([Navigation, EffectFade, Autoplay]);
  header();
  intro();
  plane();
  comfort();
  footer();
});
