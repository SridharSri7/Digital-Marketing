/* ================= MOBILE MENU ================= */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ======= NAVBAR
document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(e){
        if(window.innerWidth <= 991){
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});




/* ================= CASE STUDY HERO IMAGES ================= */

(() => {

    const images = document.querySelectorAll(".cs-img");

    if (!images.length) return;

    window.addEventListener("load", () => {

        images.forEach((img, index) => {

            img.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(60px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 1200,
                    delay: index * 250,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

        });

    });

})();


/* ================= MOUSE GLOW (CASE STUDY HERO) ================= */

(() => {

    const glow = document.querySelector(".cs-bg-glow");
    if (!glow) return;

    document.addEventListener("mousemove", (e) => {

        glow.style.left = (e.clientX - 250) + "px";
        glow.style.top = (e.clientY - 250) + "px";

    });

})();


/* ================= TRUSTED PARTNERS ANIMATION ================= */

(() => {

    const partnersSection = document.querySelector("#partners");
    if (!partnersSection) return;

    const items = partnersSection.querySelectorAll(
        ".anim-left, .anim-right, .anim-top, .anim-bottom"
    );

    const partnersObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });

    }, { threshold: 0.2 });

    items.forEach(el => partnersObserver.observe(el));

})();


/* ================= SUCCESS STORY SECTION ================= */

(() => {

    const successSection = document.querySelector("#success");
    if (!successSection) return;

    const items = successSection.querySelectorAll(
        ".s-anim-left, .s-anim-right, .s-anim-top, .s-anim-bottom"
    );

    const successObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("s-show");
            }
        });

    }, { threshold: 0.2 });

    items.forEach(el => successObserver.observe(el));

})();


/* ================= TRUSTED PARTNERS LOGO PAUSE ================= */

(() => {

    const rows = document.querySelectorAll(".logo-row");

    rows.forEach(row => {

        row.addEventListener("mouseenter", () => {
            row.style.animationPlayState = "paused";
        });

        row.addEventListener("mouseleave", () => {
            row.style.animationPlayState = "running";
        });

    });

})();


