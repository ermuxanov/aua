import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { header } from "./components/header.js";
import { footer } from "./components/footer.js";

import { mainPage } from "./pages/mainPage.js";
import { aboutPage } from "./pages/aboutPage.js";
import { fleetInnerPage } from "./pages/fleetInnerPage.js";
import { foodPage } from "./pages/foodPage.js";
import { fleetPage } from "./pages/fleetPage.js";
import { animalPage } from "./pages/animalPage.js";
import { servicePage } from "./pages/servicePage.js";
import { newsPage } from "./pages/newsPage.js";
import { bagaggeInnerPage } from "./pages/bagaggeInnerPage.js";

// if ("scrollRestoration" in history) {
//   history.scrollRestoration = "manual";
// }

const page = document.body.dataset.page;

window.addEventListener("load", () => {
  // window.scrollTo(0, 0);
  plugins();
  Swiper.use([Navigation, EffectFade, Autoplay]);
  header();
  footer();

  // main page
  mainPage(page);

  // about page
  aboutPage(page);

  // fleet-inner page
  fleetInnerPage(page);

  // food page
  foodPage(page);

  // fleet page
  fleetPage(page);

  // animal page
  animalPage(page);

  // service page
  servicePage(page);

  // news page
  newsPage(page);

  // bagagge-inner page
  bagaggeInnerPage(page);
});
