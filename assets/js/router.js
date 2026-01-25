const navLinks = document.querySelectorAll('[data-route]');
const views = document.querySelectorAll('.app-view');

function showView(route) {
  views.forEach(view => view.classList.remove('is-active'));

  const target = document.getElementById(route);
  if (!target) return;

  // reflow to restart animation
  void target.offsetWidth;

  target.classList.add('is-active');
}

function setActiveNav(route) {
  navLinks.forEach(link => {
    link.classList.toggle('is-active', link.dataset.route === route);
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const route = link.dataset.route;

    // update URL (no reload)
    history.pushState({ route }, '', `${route}`);

    setActiveNav(route);
    showView(route);
  });
});

/* Handle browser back / forward */
window.addEventListener('popstate', () => {
  const route = location.hash.replace('#', '') || 'home';
  setActiveNav(route);
  showView(route);
});

/* Initial load */
window.addEventListener('load', () => {
  const route = location.hash.replace('#', '') || 'home';
  setActiveNav(route);
  showView(route);
});
