document.querySelectorAll("[data-publication-browser]").forEach((browser) => {
  const controls = browser.querySelector(".publication-filters");
  const buttons = Array.from(browser.querySelectorAll("[data-publication-filter]"));
  const papers = Array.from(browser.querySelectorAll("ol.bibliography > li"));
  const description = browser.querySelector("[data-publication-description]");
  const count = browser.querySelector("[data-publication-count]");

  function show(view) {
    let visible = 0;
    papers.forEach((paper) => {
      const selected = paper.querySelector('[data-publication-selected="true"]') !== null;
      paper.hidden = view === "selected" && !selected;
      if (!paper.hidden) visible += 1;
    });
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.publicationFilter === view));
    });
    description.textContent = view === "selected"
      ? "Highlights in mechanics-informed learning, contact-rich manipulation, and soft robotics, including award-recognized work."
      : "All papers from 2024 onward, including preprints and workshop papers.";
    count.textContent = `${visible} ${view === "selected" ? "selected publications" : "recent papers"}`;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => show(button.dataset.publicationFilter));
  });
  show("selected");
  controls.hidden = false;
});
