import { food } from "../components/food.js";
import { gsapAnim } from "../components/utils.js";
import { passenger } from "../sections/passenger.js";

export function aboutPage(page) {
  if (page === "about") {
    passenger();
    food();

    gsapAnim([".mission__left", ".mission__right"], 150, 20);
    gsapAnim(".flot__block", 120, 20);
    gsapAnim([".map__right,.map__left"], 200, 10);
  }
}
