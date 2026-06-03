// ========================== FAQ ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {

    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});


// ========================== OUR WORK ==========================

document.addEventListener("DOMContentLoaded", () => {

    const workSection = document.querySelector(".our-work");

    // safety check (VERY IMPORTANT)
    if (!workSection) return;

    const workItems = workSection.querySelectorAll(".work-item");

    function revealWork() {

        const trigger = window.innerHeight * 0.85;

        workItems.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < trigger) {
                item.classList.add("show");
            }

        });

    }

    window.addEventListener("scroll", revealWork);
    revealWork();

});


// ========================== MOBILE MENU ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});


// ========================== DROPDOWN ==========================

document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(e){
        if(window.innerWidth <= 991){
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});