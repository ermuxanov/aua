import { gsapAnim } from "../components/utils.js";
import { comfort } from "../sections/comfort.js";
import { intro } from "../sections/intro.js";
import { plane } from "../sections/plane.js";

export function mainPage(page) {
  if (page == "main") {
    intro();
    plane();
    comfort();

    gsapAnim([".info__left",".info__right-card"], 100, 50);
    gsapAnim([".feature__left", ".feature__mid", ".feature__title", ".feature__text", ".feature__more"], 100, 0);
  }
}
