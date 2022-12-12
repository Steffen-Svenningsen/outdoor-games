// "Import" the elements we need to access the dropdown and store them as constants (variables)
const activityMenu = document.getElementById('activityDropdown');
const eventMenu = document.getElementById('eventDropdown');
const activityLink = document.getElementById('activityLink');
const eventLink = document.getElementById('eventLink');

// Event listener function to either show og hide the elements
activityLink.addEventListener('mouseover', function() {
  activityMenu.style.display = "flex";
  activityLink.style.backgroundColor = "var(--background)";
});

activityMenu.addEventListener('mouseover', function() {
  activityMenu.style.display = "flex";
  activityLink.style.backgroundColor = "var(--background)";
});

activityMenu.addEventListener('mouseleave', function() {
  activityMenu.style.display = "none";
  activityLink.style.backgroundColor = "transparent";
});

activityLink.addEventListener('mouseleave', function() {
  activityMenu.style.display = "none";
  activityLink.style.backgroundColor = "transparent";
});

eventLink.addEventListener('mouseover', function() {
  eventMenu.style.display = "flex";
  eventLink.style.backgroundColor = "var(--background)"
});

eventMenu.addEventListener('mouseover', function() {
  eventMenu.style.display = "flex";
  eventLink.style.backgroundColor = "var(--background)"
});

eventMenu.addEventListener('mouseleave', function() {
  eventMenu.style.display = "none";
  eventLink.style.backgroundColor = "transparent"
});

eventLink.addEventListener('mouseleave', function() {
  eventMenu.style.display = "none";
  eventLink.style.backgroundColor = "transparent"
});

// Hamburger menu
const mobileMenu = document.getElementById('mobileMenu');
const lineTwo = document.getElementById('h-line-two');
const lineThree = document.getElementById('h-line-three');

mobileMenu.style.display = "none";

function toggleMenu() {
  if(mobileMenu.style.display === "none") {
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

newActivities.style.display = "none";
showMoreBtn.innerHTML = "Vis flere";

function toggleMore() {
  if(newActivities.style.display === "none") {
    newActivities.style.display = "flex";
    showMoreBtn.innerHTML = "Vis mindre";
  } else {
    newActivities.style.display = "none";
    showMoreBtn.innerHTML = "Vis flere";
  }
};

// Scroll indicator | Progress bar
window.onscroll = function() {scrollProgress()};

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('scrollBar').style.width = scrolled + "%";
};

// Configuration for swiper.js plugin to create the 'customer reviews slider'.
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 100,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Enable autoplay
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});