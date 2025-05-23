export function queryMatches(width, prefix = "max") {
  return window.matchMedia(`(${prefix}-width: ${width}px)`).matches;
}

export const COMMON_MEDIA_QUERIES = {
  TABLET: queryMatches(991.98),
  MOBILE: queryMatches(767.98),
};

// Function to detect mobile or tablet devices
export function isMobileOrTablet() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|KFAPWI/i.test(navigator.userAgent);
}

export function addClassName(el, className = "active") {
  el.classList.add(className);
}

export function removeClassName(el, className = "active") {
  el.classList.remove(className);
}

export function toggleClassName(el, className = "active") {
  el.classList.toggle(className);
}

export function removeClasses(array, className = "active") {
  array.forEach((currentEl) => {
    removeClassName(currentEl, className);
  });
}

export function gsapAnim(selectors, transformY, start = 0) {
  const elements = [];

  const selectorList = Array.isArray(selectors) ? selectors : [selectors];

  selectorList.forEach((selector) => {
    elements.push(...document.querySelectorAll(selector));
  });

  elements.forEach((element) => {
    gsap.set(element, {
      y: `${transformY}px`,
      autoAlpha: 0,
    });

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: `${start}% bottom`,
        end: "+=1",
        scrub: true,
        onEnter: () => {
          gsap.to(element, {
            autoAlpha: 1,
            y: 0,
          });
        },
        onLeaveBack: () => {
          gsap.to(element, {
            autoAlpha: 0,
            y: `${transformY}px`,
          });
        },
      },
    });
  });
}

export function changeText(el, text) {
  el.innerText = text;
}

export function dispatchCustomEvent({ el, event, detail }) {
  el.dispatchEvent(new CustomEvent(event, { detail }));
}

export function wrapElements(elms, wrapClass = "wrapped", wrapType = "div") {
  elms.forEach((el) => {
    const wrapEl = document.createElement(wrapType);
    wrapEl.classList = wrapClass;
    el.parentNode.children[1].before(wrapEl).appendChild(wrapEl);
    wrapEl.appendChild(el);
  });
}
