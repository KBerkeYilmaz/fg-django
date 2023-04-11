document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: true,
        freeMode: true,
        mousewheel: true,
        freeModeMomentum: false,
        freeModeMomentumBounce: false,
        freeModeSticky: false,
        freeModeMinimumVelocity: 200,
        freeModeMomentumRatio: 200,
        freeModeMomentumDeceleration: 0.5,
        freeModeMomentumDuration: 300, // adjust this value
        speed: 300,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 720px
            780: {
              slidesPerView: 4,
              spaceBetween: 20
            }
    }
});
});





const swiperHero = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    hashNavigation: {
        watchState: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    on: {

        slideChangeTransitionStart: function () {
            this.slides[this.previousIndex].classList.add("fadeOut");
            
        },
        slideChangeTransitionEnd: function () {
            this.slides.forEach((slide) => {
                slide.classList.remove("fadeOut");
            });
        },
    },
});

