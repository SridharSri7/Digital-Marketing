const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// This code is identical to the code in js/blog.js, js/about.js, and js/home.js. It adds an event listener to the menu button that toggles the "active" class on the navigation links when the button is clicked.

// ======================== OUR PRICING ========================
(() => {

    const section = document.querySelector("#pricing");
    if (!section) return;

    const cards = section.querySelectorAll(".p-anim");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));

})();

// ======================== FLIP ANIMATION ========================
(() => {

    const cards = document.querySelectorAll(".price-card");

    cards.forEach(card => {

        card.addEventListener("click", (e) => {

            // ❗ IMPORTANT: don't flip when clicking button
            if (e.target.tagName === "BUTTON") return;

            card.classList.toggle("flipped");

        });

    });

})();

// ======================= BACKGROUND ANIMATION ========================
const cards = document.querySelectorAll(".price-card");
const body = document.body;

// default background
body.classList.add("default-bg");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        const type = card.dataset.bg;

        body.className = ""; // remove all
        body.classList.add(`bg-${type}`);
    });

    card.addEventListener("mouseleave", () => {
        body.className = "";
        body.classList.add("default-bg");
    });

});

// ======================== TOP TEXT ========================
window.addEventListener("load", () => {

    const elements = document.querySelectorAll(
        ".anim-left, .anim-right, .anim-top, .anim-bottom"
    );

    elements.forEach((el, index) => {

        setTimeout(() => {
            el.classList.add("show");
        }, index * 250); // stagger effect

    });

});