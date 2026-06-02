// Floating mouse glow effect
document.addEventListener("mousemove", (e) => {
    const glow = document.querySelector(".glow");

    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;

    glow.style.left = x + "%";
    glow.style.top = y + "%";
});