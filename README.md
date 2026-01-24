# Leadernace Frontend Base (HTML5 + CSS3 + Bootstrap 5)

## Overview
- Pure HTML5/CSS3 organized with Bootstrap 5 utilities and components where suitable.
- RTL-first Arabic UI; LTR-ready via logical properties and hooks.
- Modular animations with adjustable variables for timing and easing.
- Lightweight single-page starter ready to expand into multiple pages.

## Language & RTL Hooks
- HTML root uses `lang="ar"` and `dir="rtl"`.
- Language hooks: `data-lang` and `data-dir` on `<html>`; switch to English by setting `lang="en"` and `dir="ltr"`.
- Text hooks: use `data-i18n-key` on textual elements to enable future locale replacement.
- Direction-safe styles rely on logical properties and Bootstrap’s `ms-*` / `me-*` utilities.

## Animations
- Location: `assets/css/animations.css`
- Classes:
  - `anim-fade-in`, `anim-fade-out`
  - `anim-slide-up`, `anim-slide-down`
  - `anim-slide-in-start` respects current `dir` for start-side motion
- Variables:
  - `--anim-ease`, `--anim-fast`, `--anim-medium`, `--anim-slow`
- Page transitions:
  - Use `.page-enter` and `.page-exit` states on `.page` container (defined in `assets/css/main.css`).
- Loading overlay:
  - Present in DOM; show by toggling `body.is-loading`.

## Assets Structure
```
assets/
  css/
    main.css          # Base tokens, utilities, hover effects, page transitions
    animations.css    # Keyframes and modular animation classes
  images/
    logo.svg
  fonts/              # Reserved for future self-hosted fonts
pages/                # Reserved for future pages
index.html
```

## Bootstrap 5
- Included via CDN in `index.html`.
- Prefer utilities (spacing, flex, grid) and components only where they match design.

## Pixel-Perfect & Tokens
- Typography, spacing, radius, colors defined as CSS variables in `main.css`:
  - `--fs-base`, `--fs-lead`, `--fs-display`
  - `--space-*`, `--radius-*`, `--color-*`
- Adjust these tokens to match Figma exactly for desktop and mobile breakpoints.

## Usage
- Open `index.html` directly in a browser for local preview.
- Add new pages under `pages/` and reuse header/footer structure as needed.
