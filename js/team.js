// This code is identical to the code in js/blog.js, js/about.js, and js/home.js. 
// It adds an event listener to the menu button that toggles the "active" class on the navigation links when the button is clicked.

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


// oUR tEAM

const cards = document.querySelectorAll(".floating-card");

cards.forEach((card,index)=>{

    card.animate(
    [
        {transform:"translateY(0px)"},
        {transform:"translateY(-20px)"},
        {transform:"translateY(0px)"}
    ],
    {
        duration:3000 + (index * 500),
        iterations:Infinity
    });

});

// ================================ LEADERSHIP SECTION ===================================
const leaderCards = document.querySelectorAll(".leader-card");

const leaderObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{threshold:0.2});

leaderCards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition=`${0.6 + index*0.15}s`;

    leaderObserver.observe(card);

});

// ====================== OUR STATISTICS ========================
const teamStatsSection = document.querySelector(".teamstats-section");
const teamCounters = document.querySelectorAll(".team-counter");

let teamStatsStarted = false;

function startTeamCounters(){

    if(teamStatsStarted) return;

    teamStatsStarted = true;

    teamCounters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            count += increment;

            if(count < target){

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const top = teamStatsSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        startTeamCounters();

    }

});

// ======================== Behind the Scenes (BTS) Section ========================
const btsItems = document.querySelectorAll(".bts-item");

const btsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

btsItems.forEach(item=>{
    btsObserver.observe(item);
});

// TEXT ANIMATION
const btsAnimatedElements = document.querySelectorAll(
    ".bts-anim-left, .bts-anim-top, .bts-anim-bottom"
);

const btsTextObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("bts-visible");

        }

    });

},{
    threshold:0.2
});

btsAnimatedElements.forEach(el=>{

    btsTextObserver.observe(el);

});

// JOIN OUR TEAM SECTION
const joinTeamElements = document.querySelectorAll(
'.jointeam-tag, .jointeam-title, .jointeam-text, .jointeam-buttons'
);

const joinTeamObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('jointeam-show');

        }

    });

},{
    threshold:0.2
});

joinTeamElements.forEach((el,index)=>{

    el.style.transitionDelay = `${index * 0.2}s`;

    joinTeamObserver.observe(el);

});