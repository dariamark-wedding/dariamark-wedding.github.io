const revealItems = document.querySelectorAll(".reveal");

// Re-align direct links after fonts and the hero artwork finish loading.
// This keeps shared section URLs accurate even when those assets shift the layout.
if (window.location.hash) {
  window.addEventListener(
    "load",
    () => {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      document.getElementById(targetId)?.scrollIntoView();
    },
    { once: true },
  );
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll(".accordion details").forEach((item) => {
  const content = item.querySelector(".accordion__content");

  item.addEventListener("toggle", () => {
    content.classList.remove("is-opening");
    if (!item.open) return;

    void content.offsetWidth;
    content.classList.add("is-opening");
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-menu");

if (menuToggle && siteMenu) {
  const menuLabels =
    document.documentElement.lang === "ru"
      ? { open: "Открыть меню", close: "Закрыть меню" }
      : { open: "Open navigation menu", close: "Close navigation menu" };

  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", menuLabels.open);
    siteMenu.hidden = true;
  };

  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? menuLabels.close : menuLabels.open);
    siteMenu.hidden = !willOpen;
  });

  siteMenu.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    const accordionLabel = link.dataset.accordionLabel;
    if (accordionLabel) {
      const matchingHeading = [...document.querySelectorAll(".accordion summary h3")].find(
        (heading) => heading.textContent.trim() === accordionLabel,
      );
      const matchingDetails = matchingHeading?.closest("details");

      if (matchingDetails) {
        event.preventDefault();
        matchingDetails.open = true;
        closeMenu();
        requestAnimationFrame(() => matchingDetails.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }

    closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!siteMenu.hidden && !siteMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !siteMenu.hidden) {
      closeMenu();
      menuToggle.focus();
    }
  });
}
