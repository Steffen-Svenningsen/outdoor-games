const activityMenu = document.getElementById('activityDropdown');
const eventMenu = document.getElementById('eventDropdown');
const activityLink = document.getElementById('activityLink');
const eventLink = document.getElementById('eventLink');

activityLink.addEventListener('mouseover', function() {
  activityMenu.style.display = "flex";
});

activityMenu.addEventListener('mouseover', function() {
  activityMenu.style.display = "flex";
});

activityMenu.addEventListener('mouseleave', function() {
  activityMenu.style.display = "none";
});

activityLink.addEventListener('mouseleave', function() {
  activityMenu.style.display = "none";
});

eventLink.addEventListener('mouseover', function() {
  eventMenu.style.display = "flex";
});

eventMenu.addEventListener('mouseover', function() {
  eventMenu.style.display = "flex";
});

eventMenu.addEventListener('mouseleave', function() {
  eventMenu.style.display = "none";
});

eventLink.addEventListener('mouseleave', function() {
  eventMenu.style.display = "none";
});

// Configuration for swiper.js plugin to create the 'customer reviews slider'.
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
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