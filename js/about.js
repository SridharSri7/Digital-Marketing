// This code is identical to the code in js/blog.js, js/contact.js, js/pricing.js, and js/home.js. It adds an event
//  listener to the menu button that toggles the "active" class // on the navigation links when the button is clicked.

// ===lock scroll===
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // LOCK / UNLOCK SCROLL
  document.body.classList.toggle("no-scroll");
});
// ======= NAVBAR
document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(e){
        if(window.innerWidth <= 991){
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});



/* =========================
   SCROLL REVEAL
========================= */

const revealWWA = document.querySelectorAll(".reveal-wwa");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if(entry.isIntersecting){

            setTimeout(() => {
                entry.target.classList.add("active");
            }, index * 150);

        }

    });

},{threshold:0.2});

revealWWA.forEach(el => observer.observe(el));


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target + "+";
        }

    };

    update();
});


/* =========================
   MOUSE PARALLAX (CARDS MOVE SLIGHTLY)
========================= */
const wwaSection = document.querySelector(".wwa-section");
const wwaImages = document.querySelectorAll(".wwa-img");

wwaSection.addEventListener("mousemove", (e) => {

    const rect = wwaSection.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 30;
    const moveY = (y - centerY) / 30;

    wwaImages.forEach((img, i) => {

        const speed = (i + 1) * 0.6;

        img.style.transform = `
            translate(${moveX * speed}px, ${moveY * speed}px)
            rotate(${img.dataset.rot || 0}deg)
        `;

    });

});

wwaSection.addEventListener("mouseleave", () => {

    wwaImages.forEach(img => {
        img.style.transform = "translate(0px,0px)";
    });

});

// ========================= TRUSTED PARTNERS =========================
const tpSection = document.querySelector(".tp-section");

if (tpSection) {

    const tpReveal = tpSection.querySelectorAll(".reveal-tp");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 150);

            }

        });

    }, {
        threshold: 0.2
    });

    tpReveal.forEach(el => observer.observe(el));
}

// ========================= FAQS =========================

const faqxElements = document.querySelectorAll(
    ".faqx-reveal-left, .faqx-reveal-top, .faqx-reveal-bottom"
);

const faqObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add("active");
            }, index * 150);

        }

    });

}, {
    threshold: 0.2
});

faqxElements.forEach(el => faqObserver.observe(el));

// ========================= PARTICLE ANIMATION =========================
const canvas = document.querySelector(".faqx-particles");

if (canvas) {

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = document.querySelector(".faqx-section").offsetHeight;

    const particles = [];

    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {

        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3 + 1,
            dx: (Math.random() - 0.5) * 1,
            dy: (Math.random() - 0.5) * 1
        });

    }

    function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        // draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(79,156,255,0.6)";
        ctx.fill();

        // connect particles
        particles.forEach(p2 => {

            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

            if (dist < 120) {
                ctx.beginPath();
                ctx.strokeStyle = "rgba(79,156,255,0.1)";
                ctx.lineWidth = 1;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }

        });

    });

    move();
}

    function move() {

        particles.forEach(p => {

            p.x += p.dx;
            p.y += p.dy;

            // bounce effect
            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        });

    }

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

    animate();

    // resize fix
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = document.querySelector(".faqx-section").offsetHeight;
    });

}

// ================================ OUR INSIGHTS ================================
const insSection = document.querySelector(".ins-section");

if (insSection) {

    const insItems = insSection.querySelectorAll(".reveal-ins");

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

    insItems.forEach(el => observer.observe(el));
}

// ========================== LETS GET STARTED =========================
const ctaSection = document.querySelector(".cta-section");

if (ctaSection) {

    const ctaElements = ctaSection.querySelectorAll(".reveal-cta");

    const ctaObserver = new IntersectionObserver((entries) => {

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

    ctaElements.forEach(el => ctaObserver.observe(el));
}

// ================================== FOOTER ================================
const ftrSection = document.querySelector(".ftr-section");

if (ftrSection) {

    const ftrItems = ftrSection.querySelectorAll(".ftr-col");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }, index * 150);

            }

        });

    }, { threshold: 0.2 });

    ftrItems.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
        el.style.transition = "0.8s ease";
        observer.observe(el);
    });

}