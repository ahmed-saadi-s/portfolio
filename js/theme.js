/* ================================
   Ahmed Saadi Portfolio — Theme Layer
   ================================
   Single owner of light/dark mode. Loaded synchronously from <head>,
   BEFORE the stylesheet, so the resolved theme is on <html> before the
   first paint and no flash of the wrong theme can happen.

   Resolution order: saved choice -> OS preference.
   The saved choice is only written when a human presses the toggle, which
   keeps "follow the system" as the honest default.

   Public API (window.PortfolioTheme):
     current()        -> "light" | "dark"
     system()         -> "light" | "dark"
     hasSavedChoice() -> boolean
     toggle()         -> flip + remember
     set(theme)       -> apply + remember
     preview(theme)   -> apply without remembering (previews, screenshots)
*/

(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-theme";
  var DARK_QUERY = "(prefers-color-scheme: dark)";
  var root = document.documentElement;

  // Browser chrome + icon follow the *chosen* theme, not the OS theme.
  var THEME_COLOR = { light: "#F5F0E8", dark: "#151217" };

  // Brand artwork in assets/brand/ (see the note next to those files).
  // Both pages live at the site root, so the relative path is identical.
  var FAVICON = {
    light: "assets/brand/favicon-light.png",
    dark: "assets/brand/favicon-dark.png",
  };

  function normalize(theme) {
    return theme === "dark" ? "dark" : "light";
  }

  function mediaQuery() {
    return window.matchMedia ? window.matchMedia(DARK_QUERY) : null;
  }

  function systemTheme() {
    var mq = mediaQuery();
    return mq && mq.matches ? "dark" : "light";
  }

  function readSavedChoice() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (e) {
      return null;
    }
  }

  function writeSavedChoice(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* private mode / storage disabled — the theme still works per page */
    }
  }

  function current() {
    return normalize(root.getAttribute("data-theme"));
  }

  /* Keep the browser chrome, the tab icon and the toggle's state in sync. */
  function syncChrome(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLOR[theme]);

    var icon = document.getElementById("favicon");
    if (icon) icon.setAttribute("href", FAVICON[theme]);

    var toggles = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  function apply(theme, options) {
    var next = normalize(theme);
    options = options || {};

    root.setAttribute("data-theme", next);
    if (options.persist !== false) writeSavedChoice(next);

    syncChrome(next);

    try {
      document.dispatchEvent(
        new CustomEvent("portfolio:themechange", { detail: { theme: next } })
      );
    } catch (e) {
      /* older browsers: no CustomEvent constructor, nothing depends on it */
    }

    return next;
  }

  /* ---- 1. Resolve + apply before first paint (this file runs in <head>) ---- */
  apply(readSavedChoice() || systemTheme(), { persist: false });

  /* ---- 2. Wire the toggle(s) once the document exists ---- */
  function wireToggle() {
    document.addEventListener(
      "click",
      function (event) {
        var target = event.target;
        var button = target && target.closest ? target.closest("[data-theme-toggle]") : null;
        if (!button) return;
        event.preventDefault();
        apply(current() === "dark" ? "light" : "dark");
      },
      false
    );
  }

  /* ---- 3. Follow the OS while no explicit choice has been made ---- */
  function followSystem() {
    var mq = mediaQuery();
    if (!mq) return;

    var onChange = function () {
      if (!readSavedChoice()) apply(systemTheme(), { persist: false });
    };

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  function boot() {
    syncChrome(current());
    wireToggle();
    followSystem();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.PortfolioTheme = {
    current: current,
    system: systemTheme,
    hasSavedChoice: function () {
      return readSavedChoice() !== null;
    },
    toggle: function () {
      return apply(current() === "dark" ? "light" : "dark");
    },
    set: function (theme) {
      return apply(theme);
    },
    preview: function (theme) {
      return apply(theme, { persist: false });
    },
  };
})();
