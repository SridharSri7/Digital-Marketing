const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

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