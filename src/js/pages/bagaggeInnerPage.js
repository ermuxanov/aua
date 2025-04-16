import { gsapAnim } from "../components/utils.js";

export function bagaggeInnerPage(page) {
  if (page === "bagagge-inner") {
    gsapAnim([".normal__heading", ".normal__wrapper", ".bagagge-type__heading", ".bagagge-type__card"], 100);
  }
}
