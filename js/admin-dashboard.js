const user = JSON.parse(localStorage.getItem("loggedUser"));

// ❌ NOT ADMIN → block access
if (!user || user.role !== "admin") {
    window.location.href = "index.html";
}

// fill data
document.getElementById("name").innerText = user.name;
document.getElementById("email").innerText = user.email;
document.getElementById("role").innerText = user.role;

// avatar = Gmail first letter
document.getElementById("avatar").innerText =
user.email.charAt(0).toUpperCase();

// logout
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}

// sidebar toggle
// Sidebar Toggle
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");

function toggleSidebar(){

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");

}

overlay.addEventListener("click", () => {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");

});

// Menu Links
const menuLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll(".page-section");

menuLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        // Active Menu
        menuLinks.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

        // Show Section
        sections.forEach(section =>
            section.classList.remove("active-section")
        );

        const target = link.dataset.page;

        document
            .getElementById(target)
            .classList.add("active-section");

        // Auto Close Sidebar On Mobile
        if(window.innerWidth <= 991){

            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            document.body.classList.remove("no-scroll");

        }

    });

});