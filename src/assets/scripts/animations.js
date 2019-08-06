import ScrollMagic from 'ScrollMagic';
import { TimelineMax } from 'gsap';
import 'animation.gsap';

const controller = new ScrollMagic.Controller();

const headerScene = new ScrollMagic.Scene({
triggerElement: "content-wrapper",
offset: 100,
})
.setClassToggle('#header', 'hide')
.addTo(controller)
.on('update', event => {
    const direction = event.target.controller().info('scrollDirection')
    if (direction === 'REVERSE') {
        $('#header').removeClass('hide');
    } else {
        $('#header').addClass('hide');
    }
    
})

$('.card').each(function(index) {
    const currentCard = this;
    const tweenCard = new TimelineMax()
    .to(currentCard, 0.65, {css: {transform: "translateY(0)", opacity: 1}}).delay(0.035 * index);

    const cardScene = new ScrollMagic.Scene({
        triggerElement: currentCard,
        offset: -100,
        triggerHook: 1,
    })
    .setTween(tweenCard)
    .addTo(controller);
})

$('#menuBtn').click(function() {
    $('#menu').toggleClass('menu-slide-in');
    $('#header, #menuBtn').toggleClass('menu-opened')
})