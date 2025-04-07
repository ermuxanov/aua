import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { header } from "./components/header.js";

window.addEventListener("load", () => {
  plugins();
  header();
  Swiper.use([Navigation, Autoplay]);
});
