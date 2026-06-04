const user = JSON.parse(localStorage.getItem("loggedUser"));

// ❌ If not logged in → redirect immediately
if (!user || !user.email) {
    window.location.href = "index.html";
}

// ✅ Show user data
document.getElementById("name").innerText = user.name;
document.getElementById("email").innerText = user.email;
document.getElementById("role").innerText = user.role;

// ✅ AVATAR = FIRST LETTER OF GMAIL
document.getElementById("avatar").innerText =
user.email.charAt(0).toUpperCase();

// LOGOUT
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}

// SIDEBAR TOGGLE
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

// ===============================
const menuLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll(".page-section");
const sidebar = document.getElementById("sidebar");

menuLinks.forEach(link => {

    link.addEventListener("click", e => {

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

        document
            .getElementById(link.dataset.target)
            .classList.add("active-section");

        // Close Sidebar on Mobile
        if(window.innerWidth <= 991){
            sidebar.classList.remove("active");
        }

    });

});

document.addEventListener("click", function(e){

    if(
        window.innerWidth <= 991 &&
        !sidebar.contains(e.target) &&
        !e.target.classList.contains("toggle-btn")
    ){
        sidebar.classList.remove("active");
    }

});

// ============================ profile edit form ===========================
const loggedUser =
JSON.parse(
    localStorage.getItem("loggedUser")
);

if(loggedUser){

    document.getElementById("profileName").innerText =
    loggedUser.name;

    document.getElementById("profileEmail").innerText =
    loggedUser.email;

    document.getElementById("profileRole").innerText =
    loggedUser.role;

    document.getElementById("fullName").innerText =
    loggedUser.name;

    document.getElementById("emailAddress").innerText =
    loggedUser.email;

    document.getElementById("userRole").innerText =
    loggedUser.role;

    document.getElementById("profileAvatar").innerText =
    loggedUser.name.charAt(0).toUpperCase();
}