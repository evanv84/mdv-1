import ScrollMagic from 'ScrollMagic';
import { TimelineMax } from 'gsap';
import 'animation.gsap';

const controller = new ScrollMagic.Controller();

const headerScene = new ScrollMagic.Scene({
triggerElement: "content-wrapper",
offset: 300,
})
.setClassToggle('#header', 'hide')
.addTo(controller)
.on('update', event => {
    const direction = event.target.controller().info('scrollDirection')
    if (direction === 'REVERSE') {
        $('#header').removeClass('hide');
    } else {
        setTimeout(() => {
            if (direction !== 'REVERS') {
                $('#header').addClass('hide');
            }
        }, 400)
    }
    
})

$('.card').each(function(index) {
    const currentCard = this;
    const tweenCard = new TimelineMax()
    .to(currentCard, 0.5, {css: {transform: "translateY(0)", opacity: 1}}).delay(0.0015 * index);

    const cardScene = new ScrollMagic.Scene({
        triggerElement: currentCard,
        offset: -120,
        triggerHook: 1,
    })
    .setTween(tweenCard)
    .addTo(controller);
})

$('#menuBtn').click(function() {
    $('#menu').toggleClass('menu-slide-in');
    $('#header, #menuBtn').toggleClass('menu-opened')
})