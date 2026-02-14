/* ================================
   Ahmed Saadi Portfolio — App Logic
   ================================ */

// ---------- AOS Initialization ----------
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
        disable: "mobile",
    });
});

// ---------- Typing Effect ----------
class TypingEffect {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.typeSpeed = options.typeSpeed || 80;
        this.deleteSpeed = options.deleteSpeed || 40;
        this.pauseTime = options.pauseTime || 2000;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
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

        setTimeout(() => this.tick(), delay);
    }

    updateWords(newWords) {
        this.words = newWords;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
    }
}

// Global reference to typing effect instance
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

    // Scroll to top button
    const scrollBtn = document.querySelector(".scroll-top");
    if (scrollBtn) {
        scrollBtn.classList.toggle("visible", window.scrollY > 500);
    }
});

// ---------- Smooth Scroll for Anchors ----------
document.addEventListener("click", (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });

        // Close mobile menu if open
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
