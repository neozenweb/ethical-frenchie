// Swiper: http://www.idangero.us/swiper/
import { Swiper, Autoplay } from 'swiper/dist/js/swiper.esm';

// Install modules
Swiper.use([Autoplay]);

var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  }
});