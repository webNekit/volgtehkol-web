import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperInitFunction(){
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
      });
}

export default swiperInitFunction;