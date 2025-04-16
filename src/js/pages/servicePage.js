import { gsapAnim } from "../components/utils.js";

export function servicePage(page) {
  if (page === "service") {
    gsapAnim(
      [
        ".fly__wrapper",
        ".tarif__heading",
        ".tarif__text",
        ".tarif a",
        ".tarif__wrapper",
        ".bagagge__inner",
        ".shipping__block",
      ],
      80,
      5
    );
  }
}
