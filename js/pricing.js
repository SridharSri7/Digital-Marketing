const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// This code is identical to the code in js/blog.js, js/about.js, and js/home.js. It adds an event listener to the menu button that toggles the "active" class on the navigation links when the button is clicked.

document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(
        ".reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("reveal-active");

            }

        });

    }, {
        threshold: 0.2
    });

    reveals.forEach(item => {
        observer.observe(item);
    });

});