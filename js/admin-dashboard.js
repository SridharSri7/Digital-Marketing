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
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

// sidebar links
// sidebar links + page switching
const menuLinks = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('.page-section');

menuLinks.forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        // Remove active link
        menuLinks.forEach(item =>
            item.classList.remove('active')
        );

        // Hide all sections
        sections.forEach(section =>
            section.classList.remove('active-section')
        );

        // Active menu
        link.classList.add('active');

        // Show target section
        const target = link.dataset.page;

        document
            .getElementById(target)
            .classList.add('active-section');

    });

});

// -------------------
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");

function toggleSidebar() {

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

overlay.addEventListener("click", () => {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
});