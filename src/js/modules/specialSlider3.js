function swiperSpecialInitThree(){
    const swiper = new Swiper('.swiper.swiper--special-3', {
        // настройки слайдера
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: "#special-btn-next-3",
            prevEl: "#special-btn-prev-3",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
}

export default swiperSpecialInitThree;