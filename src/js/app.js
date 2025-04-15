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
import { news } from "./sections/news.js";
import { router } from "./components/router.js";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
const page = document.body.dataset.page;
console.log(page);

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  plugins();
  Swiper.use([Navigation, EffectFade, Autoplay]);
  header();
  footer();

  // main page
  if (page == "main") {
    intro();
    plane();
    comfort();
  }

  // about page
  if (page === "about" || page === "food") {
    food();
  }

  // fleet-inner page
  if (page === "fleet-inner") {
    info();
  }

  // animal page
  if (page === "animal") {
    animal();
  }

  // news page
  if (page === "news") {
    news();
  }

  // router
  if (page !== "main") {
  }
  router();
});
