import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function partnersSlider(){
    const partnersSlider = new Swiper('.partners-swiper', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 16,
        navigation: {
            nextEl: '.partners__slider-button--next',
            prevEl: '.partners__slider-button--prev',
          },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
      });
}

export default partnersSlider;