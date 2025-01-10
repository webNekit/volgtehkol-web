function swiperSpecialInitTwo(){
    const swiper = new Swiper('.swiper.swiper--special-2', {
        // настройки слайдера
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: "#special-btn-next-2",
            prevEl: "#special-btn-prev-2",
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

export default swiperSpecialInitTwo;