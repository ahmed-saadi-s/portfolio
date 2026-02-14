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

// ---------- Contact Form AJAX Handling ----------
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const form = e.target;
        const submitBtn = form.querySelector(".btn-submit");
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = "<span>Sending...</span>";
        submitBtn.style.opacity = "0.7";

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                // Success - redirect to custom thanks page
                window.location.href = "thanks.html";
            } else {
                // Error response
                const data = await response.json();
                alert(data.errors ? data.errors.map(error => error.message).join(", ") : "Oops! There was a problem submitting your form");
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.opacity = "1";
            }
        } catch (error) {
            // Network error
            alert("Oops! There was a problem submitting your form. Please check your connection.");
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            submitBtn.style.opacity = "1";
        }
    });
});
