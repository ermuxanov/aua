import { addClassName, removeClasses, removeClassName, toggleClassName } from "./utils.js";

export function header() {
  const header = document.querySelector(".header");
  const headerRight = document.querySelector(".header__right");
  const headerNavItems = document.querySelectorAll(".header__nav-item-main");
  const headerOverlay = document.querySelector(".header__inner-overlay");
  const dropDownContents = document.querySelectorAll(".dropdown");
  const mains = document.querySelectorAll(".main");
  const mainPage = document.querySelector("#main");

  let opened = false;

  headerNavItems.forEach((dropdown, ind) => {
    dropdown.addEventListener("click", () => {
      addClassName(header, "dropdown-open");
      removeClasses(dropDownContents);
      removeClasses(headerNavItems);
      addClassName(dropDownContents[ind]);
      addClassName(dropdown);
    });
  });
  headerOverlay.addEventListener("click", (e) => {
    removeClassName(header, "dropdown-open");
    removeClasses(dropDownContents);
    removeClasses(headerNavItems);
    console.log(e.target);
  });
  // dropdown bg configuration
  const dropDownItems = document.querySelectorAll(".dropdown");
  const dropdownBg = document.querySelector(".dropdown-bg");

  let maxHeight = dropDownItems[0].offsetHeight;
  dropDownItems.forEach((dropDownItem) => {
    if (dropDownItem.offsetHeight > maxHeight) {
      maxHeight = dropDownItem.offsetHeight;
    }
  });

  dropdownBg.style.height = `${headerRight.offsetHeight + dropDownItems[0].offsetHeight}px`;

  // header search
  const search = document.querySelector(".header__search");
  const searchInput = document.querySelector(".header__search-input");
  search.addEventListener("click", () => {
    searchInput.classList.toggle("active");
  });

  window.addEventListener("click", (e) => {
    if (!e.target.closest(".header__search-input") && !e.target.closest(".header__search")) {
      searchInput.classList.remove("active");
    }
  });

  // header menu
  const menuLinks = document.querySelectorAll(".header__menu a");
  const menuBurger = document.querySelector(".header__burger");
  const menuTabs = document.querySelectorAll(".header__menu-item-main");

  menuBurger.addEventListener("click", () => {
    toggleClassName(menuBurger);
    toggleClassName(header, "menu-open");
    toggleClassName(document.body, "no-scroll");
  });
  menuTabs.forEach((menuTab) => {
    menuTab.addEventListener("click", () => {
      removeClasses(menuTabs);
      addClassName(menuTab);
    });
  });
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      removeClassName(menuBurger);
      removeClassName(header, "menu-open");
      removeClasses(menuTabs);
    });
  });

  if (mainPage && window.innerWidth > 1279) {
    gsap.to(header, {
      scrollTrigger: {
        trigger: header,
        start: `+=${window.innerHeight * 0.5} 30%`,
        end: "+=1",
        scrub: true,
        onEnter: () => {
          addClassName(header, "white");
        },
        onLeaveBack: () => {
          removeClassName(header, "white");
        },
      },
    });
  } else addClassName(header, "white");

  // header height
  const root = document.documentElement;

  root.style.setProperty("--hh", `${header.offsetHeight}px`);
}
