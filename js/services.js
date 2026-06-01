// This code is identical to the code in js/blog.js, js/about.js, and js/home.js. It 
// adds an event listener to the menu button that toggles the "active" class on the navigation links when the button is clicked.

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ============================== SERVICE DETAILS PAGE ==============================
const srvSection = document.querySelector(".srv-section");

if (srvSection) {

    const srvItems = srvSection.querySelectorAll(".reveal-srv");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 120);

            }

        });

    }, {
        threshold: 0.2
    });

    srvItems.forEach(el => observer.observe(el));
}

// ======================== SOCIAL MEDIA ICONS ANIMATION ========================
const smmSection = document.querySelector(".smm-section");

if (smmSection) {

    const floats = smmSection.querySelectorAll(".smm-float");

    /* =========================
       MOUSE PARALLAX (SUBTLE ONLY)
    ========================= */

    smmSection.addEventListener("mousemove", (e) => {

        const rect = smmSection.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        floats.forEach((el, i) => {

            const speed = el.dataset.speed || 1;

            const moveX = x * 15 * speed;
            const moveY = y * 15 * speed;

            el.style.transform = `translate(${moveX}px, ${moveY}px)`;

        });

    });

    /* RESET ON LEAVE */
    smmSection.addEventListener("mouseleave", () => {

        floats.forEach(el => {
            el.style.transform = "translate(0px,0px)";
        });

    });

}

// ========================== CREATIVE AND BRANDING SECTION ==========================
const brandSection = document.querySelector(".brand-section");

if (brandSection) {

    const items = brandSection.querySelectorAll(".reveal-brand");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });

    }, { threshold: 0.2 });

    items.forEach(el => observer.observe(el));
}

// ============================== PAID ADS SECTION ==============================
const cards = document.querySelectorAll(".ppc-3d-inner");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;

    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });

});