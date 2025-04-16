import { news } from "../sections/news.js";

export function newsPage(page) {
  if (page === "news") {
    news();
  }
}
