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
const menuLinks =
document.querySelectorAll(".menu a");

const sections =
document.querySelectorAll(".page-section");

menuLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        menuLinks.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

        sections.forEach(section =>
            section.classList.remove("active-section")
        );

        const target =
        link.dataset.target;

        document
        .getElementById(target)
        .classList.add("active-section");

    });

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