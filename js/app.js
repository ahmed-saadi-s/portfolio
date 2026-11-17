/* ================================
   Ahmed Saadi Portfolio — App Logic
   Neo-Technical Editorial
   ================================ */

// ---------- Intersection Observer for Fade-In Animations ----------
const observerOptions = {
  threshold: 0.08,
  rootMargin: "0px 0px -40px 0px",
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-up, .fade-in, .stagger-item").forEach((el) => {
    fadeObserver.observe(el);
  });
});

// ---------- Typing Effect ----------
class TypingEffect {
  constructor(element, words, options = {}) {
    this.element = element;
    this.words = words;
    this.typeSpeed = options.typeSpeed || 75;
    this.deleteSpeed = options.deleteSpeed || 38;
    this.pauseTime = options.pauseTime || 2200;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this._timer = null;
    this.start();
  }

  start() {
    this.tick();
  }

  tick() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.element.textContent = currentWord.substring(0, this.charIndex);

    let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      delay = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      delay = 400;
    }

    this._timer = setTimeout(() => this.tick(), delay);
  }

  updateWords(newWords) {
    clearTimeout(this._timer);
    this.words = newWords;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.start();
  }
}

let typingInstance = null;

function initTypingEffect(words) {
  const el = document.getElementById("typing-text");
  if (!el) return;

  if (typingInstance) {
    typingInstance.updateWords(words);
  } else {
    typingInstance = new TypingEffect(el, words);
  }
}

// ---------- Navbar Scroll Effect ----------
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }

  const scrollBtn = document.querySelector(".scroll-top");
  if (scrollBtn) {
    scrollBtn.classList.toggle("visible", window.scrollY > 500);
  }
}, { passive: true });

// ---------- Smooth Scroll for Anchors ----------
document.addEventListener("click", (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  e.preventDefault();
  const target = document.querySelector(anchor.getAttribute("href"));
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });

    const navLinks = document.querySelector(".nav-links");
    if (navLinks && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
    }
  }
});

// ---------- Scroll to Top ----------
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- Skills Nav Highlighting ----------
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".skills-nav-item");
  if (!navItems.length) return;

  const categories = document.querySelectorAll(".skill-category");
  if (!categories.length) return;

  const catObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = Array.from(categories).indexOf(entry.target);
        navItems.forEach((n) => n.classList.remove("active"));
        if (navItems[idx]) navItems[idx].classList.add("active");
      }
    });
  }, { threshold: 0.5 });

  categories.forEach((c) => catObserver.observe(c));
});

// ---------- Contact Form AJAX ----------
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector(".btn-submit");
    const originalHTML = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = "<span>Sending…</span>";
    submitBtn.style.opacity = "0.65";

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        window.location.href = "thanks.html";
      } else {
        const data = await response.json();
        alert(
          data.errors
            ? data.errors.map((err) => err.message).join(", ")
            : "Oops! There was a problem submitting your form."
        );
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
        submitBtn.style.opacity = "1";
      }
    } catch {
      alert("Oops! There was a problem. Please check your connection.");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHTML;
      submitBtn.style.opacity = "1";
    }
  });
});
