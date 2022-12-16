// "Import" the elements we need to access the dropdown and store them as constants (variables)
const activityMenu = document.getElementById('activityDropdown');
const eventMenu = document.getElementById('eventDropdown');
const activityLink = document.getElementById('activityLink');
const eventLink = document.getElementById('eventLink');

// Event listener function to either show og hide the elements
activityLink.addEventListener('mouseover', function () {
    activityMenu.style.display = "flex";
    activityLink.style.backgroundColor = "var(--background)";
});

activityMenu.addEventListener('mouseover', function () {
    activityMenu.style.display = "flex";
    activityLink.style.backgroundColor = "var(--background)";
});

activityMenu.addEventListener('mouseleave', function () {
    activityMenu.style.display = "none";
    activityLink.style.backgroundColor = "transparent";
});

activityLink.addEventListener('mouseleave', function () {
    activityMenu.style.display = "none";
    activityLink.style.backgroundColor = "transparent";
});

eventLink.addEventListener('mouseover', function () {
    eventMenu.style.display = "flex";
    eventLink.style.backgroundColor = "var(--background)"
});

eventMenu.addEventListener('mouseover', function () {
    eventMenu.style.display = "flex";
    eventLink.style.backgroundColor = "var(--background)"
});

eventMenu.addEventListener('mouseleave', function () {
    eventMenu.style.display = "none";
    eventLink.style.backgroundColor = "transparent"
});

eventLink.addEventListener('mouseleave', function () {
    eventMenu.style.display = "none";
    eventLink.style.backgroundColor = "transparent"
});

// Hamburger menu
const mobileMenu = document.getElementById('mobileMenu');
const lineTwo = document.getElementById('h-line-two');
const lineThree = document.getElementById('h-line-three');

mobileMenu.style.display = "none";

function toggleMenu() {
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "flex";
        lineTwo.style.animation = "widthChange 0.5s forwards"
        lineThree.style.animation = "fadeOut 1s forwards";
    } else {
        mobileMenu.style.display = "none";
        lineTwo.style.animation = "widthChangeBack 0.5s forwards"
        lineThree.style.animation = "fadeBack 0.5s forwards"
    }
};

// Toggle more activities
const newActivities = document.getElementById('toggleActivities');
const showMoreBtn = document.getElementById('showMoreBtn');

if (newActivities) {
    newActivities.style.display = "none";
    showMoreBtn.innerHTML = "Vis flere";

    function toggleMore() {
        if (newActivities.style.display === "none") {
            newActivities.style.display = "flex";
            showMoreBtn.innerHTML = "Vis færre";
        } else {
            newActivities.style.display = "none";
            showMoreBtn.innerHTML = "Vis flere";
        }
    };
}

// Scroll indicator | Progress bar
window.onscroll = function () { scrollProgress() };

function scrollProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + "%";
};

// Get the video element from the DOM
var promoVideo = document.getElementById("video")

// Event listener that listen for a scroll event on the window
if(promoVideo) {
    window.addEventListener("scroll", function () {
        if (elFullyVisible(promoVideo)) {
            promoVideo.play();
        } else {
            promoVideo.pause();
        }
    });
    
    // Autoplay on the video when scrolled into the users viewport
    function elFullyVisible(el) {
        return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
    }
}