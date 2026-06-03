

// ======= NAVBAR
document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(e){
        if(window.innerWidth <= 991){
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});

// ===lock scroll===
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // LOCK / UNLOCK SCROLL
  document.body.classList.toggle("no-scroll");
});





/* Counter Animation */

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = target / 100;

                if(count < target){

                    count += increment;

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => {
    observer.observe(counter);
});


/* Mouse Parallax */

document.addEventListener("mousemove",(e)=>{

    const orbit = document.querySelector(".orbit");

    const x = (window.innerWidth/2 - e.pageX) / 80;
    const y = (window.innerHeight/2 - e.pageY) / 80;

    orbit.style.transform =
    `rotate(${Date.now()*0.01}deg)
     translate(${x}px,${y}px)`;

});

// ================= case-studies.js =================

/* Reveal Cards */

const cards = document.querySelectorAll(".case-card");

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});

cards.forEach(card=>{
    revealObserver.observe(card);
});


/* Progress Animation */

const progressBars = document.querySelectorAll(".progress-fill");

const progressObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const width = entry.target.dataset.width;

            entry.target.style.width = width + "%";

        }

    });

},{threshold:.5});

progressBars.forEach(bar=>{
    progressObserver.observe(bar);
});

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for(let i=0;i<120;i++){

    particles.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        radius:Math.random()*3+1,

        speedX:(Math.random()-0.5)*0.8,
        speedY:(Math.random()-0.5)*0.8

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.x += p.speedX;
        p.y += p.speedY;

        if(p.x<0 || p.x>canvas.width)
            p.speedX *= -1;

        if(p.y<0 || p.y>canvas.height)
            p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

        ctx.fillStyle="rgba(79,156,255,0.7)";
        ctx.fill();

    });

    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});

/* ========================= HOW WE WORK SECTION =========================
   MOUSE PARALLAX EFFECT
========================= */

const hwkElements = document.querySelectorAll(".reveal-hwk");

const hwkObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if(entry.isIntersecting){

            setTimeout(() => {
                entry.target.classList.add("active");
            }, index * 150);

        }

    });

}, { threshold: 0.2 });

hwkElements.forEach(el => hwkObserver.observe(el));

// ======================= OUR WORK =======================
