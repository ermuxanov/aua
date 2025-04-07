import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { intro } from "./sections/intro.js";
import { header } from "./components/header.js";
import { marque } from "./components/marque.js";
import { master } from "./sections/master.js";
import { product } from "./sections/product.js";
import { friends } from "./sections/friends.js";
import { features } from "./sections/features.js";
import { price } from "./sections/price.js";
import { about } from "./sections/about.js";
import { spa } from "./sections/spa.js";
import { action } from "./sections/action.js";

window.addEventListener("load", () => {
  plugins();
  marque();
  Swiper.use([Navigation, Autoplay]);
  header();
  intro();
  features();
  price();
  about();
  master();
  product();
  spa();
  friends();
  action();
});
