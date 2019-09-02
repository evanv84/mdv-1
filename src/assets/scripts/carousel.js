import 'owl.carousel2/dist/assets/owl.carousel.css';
import 'owl.carousel2';

$('.owl-carousel').owlCarousel({
    // stagePadding: 50,
    loop:true,
    margin:4,
    items: 1.15,
    nav: window.matchMedia("(min-width: 1100px)").matches,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
})