// ==================== MOBILE MENU TOGGLE ====================
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

// ===============================  FAQ ACCORDION ===============================

const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {

    items.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});