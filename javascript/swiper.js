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