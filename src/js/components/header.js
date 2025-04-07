export function header() {
  const headerRight = document.querySelector(".header__right");
  const dropdownItems = document.querySelectorAll(".header__nav-item.dropdown");
  const dropdownItemsClicks = document.querySelectorAll(".header__nav-item.dropdown > .header__nav-item-main");
  const dropdowns = document.querySelectorAll(".header__nav-item.dropdown .header__nav-dropdown");
  let opened = false;

  dropdownItemsClicks.forEach((dropdownItemsClick, ind) => {
    dropdownItemsClick.addEventListener("click", () => {
      event.stopPropagation();
      if (dropdownItems[ind].classList.contains("open")) {
        return;
      }

      headerRight.classList.add("dropdown-anim");
      dropdownItems.forEach((dropdownItem) => {
        dropdownItem.classList.remove("open");
        setTimeout(() => {
          dropdownItems[ind].classList.add("open");
        }, 500);
      });
    });
  });

  // window.addEventListener("click", (e) => {
  //   if (!e.target.closest(".header__nav-dropdown-bg") && !e.target.closest(".header__right.dropdown-anim")) {
  //     headerRight.classList.remove("dropdown-anim");
  //     dropdownItems.forEach((dropdownItem) => {
  //       dropdownItem.classList.remove("open");
  //     });
  //   }
  // });

  // dropdown bg configuration
  // const paddingLeft = Number(headerRight.getAttribute("data-pl"));
  // const topPositionDropdown = window.getComputedStyle(dropdowns[0]).getPropertyValue("top");
  // const dropdownBg = document.querySelector(".header__nav-dropdown-bg");

  // let maxHeight = dropdowns[0].offsetHeight;
  // dropdowns.forEach((dropdown) => {
  //   if (dropdown.offsetHeight > maxHeight) {
  //     maxHeight = dropdown.offsetHeight;
  //   }
  // });

  // dropdownBg.style.width = `${window.innerWidth - headerRight.offsetLeft + paddingLeft}px`;
  // console.log(headerRight.offsetLeft);
  
  // dropdownBg.style.height = `calc(100% + ${maxHeight}px + ${topPositionDropdown})`;

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
