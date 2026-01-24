const links = document.querySelectorAll("[data-route]");
const views = document.querySelectorAll(".app-view");

function showView(route) {
  views.forEach(view => {
    view.classList.remove("is-active");
  });

  const target = document.getElementById(route);
  if (!target) return;

  // force reflow for animation reset
  void target.offsetWidth;

  target.classList.add("is-active");
}

links.forEach(link => {
  link.addEventListener("click", () => {
    const route = link.dataset.route;

    // nav active state
    document.querySelectorAll(".nav-link").forEach(btn =>
      btn.classList.remove("is-active")
    );
    link.classList.add("is-active");

    showView(route);
  });
});
