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


// This code is identical to the code in js/blog.js, js/about.js, and js/home.js. 
// It adds an event listener to the menu button that toggles the "active" class on the navigation links when the button is clicked.

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  msg.textContent = "Message sent successfully ✔";

  setTimeout(() => {
    msg.textContent = "";
    form.reset();
  }, 3000);
});