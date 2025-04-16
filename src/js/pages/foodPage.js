import { food } from "../components/food.js";
import { gsapAnim } from "../components/utils.js";

export function foodPage(page) {
  if (page === "food") {
    food();

    gsapAnim([".special__heading", ".special__text", ".special__card"], 100);
  }
}
