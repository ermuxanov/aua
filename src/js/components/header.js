export function header() {
  const headerRight = document.querySelector(".header__right");
  const headerNavItems = document.querySelectorAll(".header__nav-item.dropdown");
  const dropDowns = document.querySelectorAll(".header__nav-dropdown-items");

  let opened = false;

  headerNavItems.forEach((headerNavItem, ind) => {
    headerNavItem.addEventListener("click", () => {
      headerRight.classList.add("dropdown-anim");
      if (!opened) {
        dropDowns[ind].classList.add("anim-delay");
        setTimeout(() => {
          dropDowns[ind].classList.remove("anim-delay");
          opened = true;
        }, 500);
      }
      dropDowns.forEach((dropDown, i) => {
        headerNavItems[i].classList.remove("open");
        headerNavItems[ind].classList.add("open");
        if (ind === i) {
          dropDown.classList.add("open");
        } else {
          dropDown.classList.remove("open");
        }
      });
    });
  });

  window.addEventListener("click", (e) => {
    if (!e.target.closest(".header__right")) {
      headerRight.classList.remove("dropdown-anim");
      opened = false;
      headerNavItems.forEach((e, i) => {
        e.classList.remove("open");
        dropDowns[i].classList.remove("open");
      });
    }
  });

  // dropdown bg configuration
  const dropDownItems = document.querySelectorAll(".header__nav-dropdown-items");
  const dropdownBg = document.querySelector(".header__nav-dropdown-bg");

  let maxHeight = dropDownItems[0].offsetHeight;
  dropDownItems.forEach((dropDownItem) => {
    if (dropDownItem.offsetHeight > maxHeight) {
      maxHeight = dropDownItem.offsetHeight;
    }
  });

  dropdownBg.style.height = `calc(100% + ${maxHeight}px)`;

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
}
