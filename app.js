/**
 * Her Bloom Circle — app.js
 * -----------------------------------------------------------------
 * Renders the Index list and Circle grid from assets/data/programs.js,
 * renders Events from assets/data/events.js, powers the accessible
 * Details panel (modal), and tracks the active bottom-navigation tab.
 *
 * If JavaScript is disabled, the page still shows a static message
 * inside #index-list and #circle-grid (see index.html noscript block)
 * and all core navigation/content remains readable.
 */
(function () {
  "use strict";

  var PROGRAMS = window.HBC_PROGRAMS || [];
  var EVENTS = window.HBC_EVENTS || [];

  /* ---------------- Render: Index rows ---------------- */
  function renderIndex() {
    var list = document.getElementById("index-list");
    if (!list) return;
    list.innerHTML = "";
    PROGRAMS.forEach(function (p) {
      var row = document.createElement("button");
      row.type = "button";
      row.className = "index-row";
      row.setAttribute("data-id", p.id);
      row.setAttribute("aria-haspopup", "dialog");
      row.innerHTML =
        '<span class="index-num">' + p.number + '</span>' +
        '<span class="index-title-wrap"><h3>' + p.title + '</h3>' +
        '<span class="index-cat">' + p.category + '</span></span>' +
        '<span class="index-age">' + (p.ageRange || "") + '</span>' +
        '<span class="index-status" data-status="' + p.status + '">' + p.status + '</span>';
      row.addEventListener("click", function () { openDetails(p.id, row); });
      row.addEventListener("mouseenter", function (e) { showPreview(p.image, row); });
      row.addEventListener("mousemove", function (e) { movePreview(e); });
      row.addEventListener("mouseleave", hidePreview);
      row.addEventListener("focus", function () { showPreview(p.image, row); });
      row.addEventListener("blur", hidePreview);
      list.appendChild(row);
    });
  }

  /* ---------------- Desktop hover/focus preview image ---------------- */
  var previewEl = null;
  function ensurePreviewEl() {
    if (previewEl) return previewEl;
    previewEl = document.createElement("div");
    previewEl.className = "index-preview";
    previewEl.setAttribute("aria-hidden", "true");
    var img = document.createElement("img");
    img.alt = "";
    previewEl.appendChild(img);
    document.body.appendChild(previewEl);
    return previewEl;
  }
  function showPreview(src, anchorEl) {
    if (window.matchMedia && window.matchMedia("(max-width: 720px)").matches) return;
    var el = ensurePreviewEl();
    var img = el.querySelector("img");
    img.src = src;
    var rect = anchorEl.getBoundingClientRect();
    var top = Math.min(rect.top, window.innerHeight - 300);
    el.style.top = Math.max(top, 12) + "px";
    el.style.left = (rect.right + 24) + "px";
    if (rect.right + 24 + 220 > window.innerWidth) {
      el.style.left = (rect.left - 244) + "px";
    }
    el.classList.add("is-visible");
  }
  function movePreview(e) {
    if (!previewEl) return;
  }
  function hidePreview() {
    if (previewEl) previewEl.classList.remove("is-visible");
  }

  /* ---------------- Render: Circle grid ---------------- */
  function renderCircle() {
    var grid = document.getElementById("circle-grid");
    if (!grid) return;
    grid.innerHTML = "";
    PROGRAMS.forEach(function (p, i) {
      var card = document.createElement("button");
      card.type = "button";
      card.className = "circle-card" + (i % 5 === 0 ? " size-wide" : "");
      card.setAttribute("data-id", p.id);
      card.setAttribute("aria-haspopup", "dialog");
      card.innerHTML =
        '<img src="' + p.image + '" alt="' + p.title + ' — ' + p.category + '" loading="lazy" width="600" height="750" onerror="this.closest(\'.circle-card\').classList.add(\'img-missing\')">' +
        '<span class="circle-caption"><span class="cc-num">' + p.number + '</span><h3>' + p.title + '</h3></span>';
      card.addEventListener("click", function () { openDetails(p.id, card); });
      grid.appendChild(card);
    });
  }

  /* ---------------- Render: Events ---------------- */
  function renderEvents() {
    var list = document.getElementById("events-list");
    var empty = document.getElementById("events-empty");
    if (!list || !empty) return;
    if (!EVENTS.length) {
      list.style.display = "none";
      empty.style.display = "block";
      return;
    }
    list.style.display = "";
    empty.style.display = "none";
    list.innerHTML = "";
    EVENTS.forEach(function (ev) {
      var row = document.createElement("div");
      row.className = "event-row";
      row.innerHTML =
        '<div class="event-date-block">' + ev.date + (ev.time ? '<br>' + ev.time : '') + '</div>' +
        '<div class="event-info"><h3>' + ev.title + '</h3><p>' + ev.summary + '</p></div>' +
        '<a class="event-status" data-status="' + ev.status + '" href="' + (ev.registrationUrl || '#contact') + '">' + ev.status + '</a>';
      list.appendChild(row);
    });
  }

  /* ---------------- Details panel (accessible modal) ---------------- */
  var lastFocusedEl = null;

  function buildDetailsMarkup(p) {
    return (
      '<button type="button" class="details-close" id="details-close-btn" aria-label="Close details">✕</button>' +
      '<div class="details-media"><img src="' + p.image + '" alt="' + p.title + '"></div>' +
      '<div class="details-num">' + p.number + '</div>' +
      '<h2 id="details-title">' + p.title + '</h2>' +
      '<div class="details-cat">' + p.category + '</div>' +
      '<p class="details-desc">' + p.description + '</p>' +
      '<dl class="details-meta-grid">' +
      '<div><dt>Who it\'s for</dt><dd>' + (p.ageRange || "All are welcome") + '</dd></div>' +
      '<div><dt>Format</dt><dd>' + (p.format || "See Events") + '</dd></div>' +
      '<div><dt>Availability</dt><dd>' + p.status + '</dd></div>' +
      '<div><dt>Experience</dt><dd>' + (p.experience || "") + '</dd></div>' +
      '</dl>' +
      '<div class="details-cta"><a class="btn btn-primary" href="' + p.cta.href + '">' + p.cta.label + '</a></div>'
    );
  }

  function openDetails(id, triggerEl) {
    var p = PROGRAMS.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    lastFocusedEl = triggerEl || document.activeElement;

    var overlay = document.getElementById("details-overlay");
    var panel = document.getElementById("details-panel");
    panel.innerHTML = buildDetailsMarkup(p);
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    window.HBC_LAST_DETAILS_ID = id;
    history.replaceState(null, "", "#details-" + id);
    setActiveTab("details");

    var closeBtn = document.getElementById("details-close-btn");
    closeBtn.addEventListener("click", closeDetails);
    panel.focus();
    document.addEventListener("keydown", trapFocus);
  }

  function closeDetails() {
    var overlay = document.getElementById("details-overlay");
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", trapFocus);
    if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
      lastFocusedEl.focus();
    }
    updateActiveTabFromScroll();
  }

  function trapFocus(e) {
    var overlay = document.getElementById("details-overlay");
    if (!overlay.classList.contains("is-open")) return;
    if (e.key === "Escape") {
      closeDetails();
      return;
    }
    if (e.key !== "Tab") return;
    var focusables = overlay.querySelectorAll('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  /* ---------------- Bottom nav: active tab tracking ---------------- */
  var navLinks = [];
  function setActiveTab(key) {
    navLinks.forEach(function (a) {
      if (a.getAttribute("data-tab") === key) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  }

  function updateActiveTabFromScroll() {
    var sections = ["home", "index", "circle", "about", "contact"];
    var scrollPos = window.scrollY + window.innerHeight * 0.35;
    var current = "home";
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) current = id;
    });
    setActiveTab(current === "home" ? "index" : current);
  }

  function initBottomNav() {
    navLinks = Array.prototype.slice.call(document.querySelectorAll(".bottom-navigation a"));
    navLinks.forEach(function (a) {
      a.addEventListener("click", function () {
        setActiveTab(a.getAttribute("data-tab"));
      });
    });

    var detailsTab = document.querySelector('.bottom-navigation a[data-tab="details"]');
    if (detailsTab) {
      detailsTab.addEventListener("click", function (e) {
        e.preventDefault();
        var id = window.HBC_LAST_DETAILS_ID || (PROGRAMS[0] && PROGRAMS[0].id);
        if (id) openDetails(id, detailsTab);
      });
    }

    if ("IntersectionObserver" in window) {
      window.addEventListener("scroll", throttle(updateActiveTabFromScroll, 120), { passive: true });
      updateActiveTabFromScroll();
    }
  }

  function throttle(fn, wait) {
    var t = null, lastArgs = null;
    return function () {
      lastArgs = arguments;
      if (t) return;
      t = setTimeout(function () { fn.apply(null, lastArgs); t = null; }, wait);
    };
  }

  /* ---------------- Scroll reveal ---------------- */
  function initReveal() {
    var targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------------- Contact form (client-side only; static-form provider TBD) ---------------- */
  function initForm() {
    var form = document.getElementById("interest-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (form.querySelector(".honeypot-field input").value) return; // bot trap

      var valid = true;
      var name = form.querySelector("#f-name");
      var email = form.querySelector("#f-email");

      [name, email].forEach(function (field) {
        var row = field.closest(".form-row");
        if (!field.value.trim() || (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
          row.classList.add("has-error");
          valid = false;
        } else {
          row.classList.remove("has-error");
        }
      });

      if (!valid) return;

      var successEl = document.getElementById("form-success");
      form.reset();
      successEl.classList.add("is-visible");
      successEl.focus();
      successEl.setAttribute("tabindex", "-1");
    });
  }

  /* ---------------- Open details directly from a #details-<id> URL ---------------- */
  function openFromHash() {
    var hash = window.location.hash;
    if (hash && hash.indexOf("#details-") === 0) {
      var id = hash.replace("#details-", "");
      setTimeout(function () { openDetails(id, document.body); }, 50);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderIndex();
    renderCircle();
    renderEvents();
    initBottomNav();
    initReveal();
    initForm();
    openFromHash();

    var overlay = document.getElementById("details-overlay");
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeDetails();
    });
  });
})();
