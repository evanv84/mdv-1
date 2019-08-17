import ScrollMagic from 'ScrollMagic';
import { TimelineMax } from 'gsap';
import 'animation.gsap';

const controller = new ScrollMagic.Controller();

const headerScene = new ScrollMagic.Scene({
triggerElement: "content-wrapper",
offset: 550,
})
.addTo(controller)
.on('update', event => {
    const direction = event.target.controller().info('scrollDirection')
    if (direction === 'REVERSE') {
        $('#header').removeClass('hide');
    } else {
        if ($(window).scrollTop() >= 250) {
            $('#header').addClass('hide');
        }
    }
    
})

$('.card').each(function(index) {
    const currentCard = this;
    const tweenCard = new TimelineMax()
    .to(currentCard, 0.5, {css: {transform: "translateY(0)", opacity: 1}}).delay(0.01 * index);

    const cardScene = new ScrollMagic.Scene({
        triggerElement: currentCard,
        offset: -250,
        triggerHook: 1,
    })
    .setTween(tweenCard)
    .addTo(controller)
    .reverse(false);
})

$('#menuBtn').click(function() {
    if (!$('.order-block').hasClass('menu-slide-in')) {
        $('#menu').toggleClass('menu-slide-in');
        $('#header, #menuBtn').toggleClass('menu-opened')
    }

    if (!$('#menu').hasClass('menu-slide-in')) {
        $('#header, #menuBtn').removeClass('menu-opened')
    }
    
    $('.order-block').removeClass('menu-slide-in');
})

$('.order-btn').click(function() {
    $('.order-block').addClass('menu-slide-in')
    $('#header, #menuBtn').addClass('menu-opened')
})

$('.highlight-button').click(function() {
    const parent = $(this).parent();
    const icon = $(this).find('.fas').toggleClass('fa-angle-down fa-angle-up')
    parent.find('.highlight-content').slideToggle();
    $(this).toggleClass('active')
})