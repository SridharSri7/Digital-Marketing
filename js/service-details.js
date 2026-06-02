// ==================== MOBILE MENU TOGGLE ====================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {

    items.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});