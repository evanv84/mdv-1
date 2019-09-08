import ScrollMagic from 'ScrollMagic';
import { TimelineMax, Power4 } from 'gsap';
import _ from 'loadsh';
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

const freezeVp = function(e) {
  e.preventDefault();
};

function stopBodyScrolling (bool) {
  if (bool === true) {
      document.body.addEventListener("touchmove", freezeVp, {passive: false});
  } else {
      document.body.removeEventListener("touchmove", freezeVp, {passive: false});
  }
}

function getCurrentPos(wrapper, hero) {
  const heroCalc = hero ? hero : document.querySelector('.hero-content').offsetHeight
  const wrapperCalc = wrapper ? wrapper : document.querySelector('.post-wrapper').offsetHeight
  return wrapperCalc - heroCalc + 100;
}

if ($('.post-wrapper')[0]) {
  const hero = document.querySelector('.hero-content').offsetHeight
  const wrapper = document.querySelector('.post-wrapper').offsetHeight
  const postSoc = new ScrollMagic.Scene({
    triggerElement: 'post-wrapper',
    offset: document.querySelector('.hero-content').offsetHeight + 170,
    duration: getCurrentPos,
  })
  .on('leave', function() {
    $('.menu-soc').removeClass('actiive')
  })
  .setClassToggle('.menu-soc', 'active')
  .addTo(controller);
}

const delay = window.matchMedia("(min-width: 1100px)").matches ? 0.01 : 0.00001;
const offset = window.matchMedia("(min-width: 1100px)").matches ? -290 : -380;

$('.card').each(function(index) {
    const currentCard = this;
    const tweenCard = new TimelineMax()
    .to(currentCard, 0.5, {css: {transform: "translate3d(0, 0, 0)", opacity: 1}, ease: Sine.easeOut }).delay(delay * index);

    const cardScene = new ScrollMagic.Scene({
        triggerElement: currentCard,
        offset,
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
        $('#header, #menuBtn').removeClass('menu-opened');
        stopBodyScrolling(false);
    }
    
    $('#menu').hasClass('menu-slide-in') ? stopBodyScrolling(true) : stopBodyScrolling(false);

    $('.order-block').removeClass('menu-slide-in');
})

$('.order-btn').click(function() {
    $('.order-block').addClass('menu-slide-in')
    stopBodyScrolling(true);
})

$('.order-block .close').click(function() {
  $('.order-block').removeClass('menu-slide-in');
  $('#menu').hasClass('menu-slide-in') ? stopBodyScrolling(true) : stopBodyScrolling(false);
})


$('.success-message .close').click(function() {
  $('.success-message').removeClass('active')
})

$('.highlight-button').click(function() {
    const parent = $(this).parent();
    $(this).toggleClass('active') 
    if ($(this).hasClass('active')) {
      parent.find('.highlight-content').fadeIn(350, function() {
        getCurrentPos();
      });
    } else {
      parent.find('.highlight-content').hide(0, function() {
        getCurrentPos();
      });
    }
    const icon = $(this).find('.fas').toggleClass('active')
})


// parallax scroll

let ticking = false;
let isFirefox = (/Firefox/i.test(navigator.userAgent));
let isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
let scrollSensitivitySetting = 25; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
let slideDurationSetting = 1000; //Amount of time for which slide is "locked"
let currentSlideNumber = 0;
let totalSlideNumber = $(".background").length;
let delta;

const Dots = {
  renderDot: () => {
    const container = $('.dots-container');
    let slides = document.querySelectorAll('.about-content .background');

    slides.forEach((item, index) => {
      let active = index === 0 ? 'active' : "";  
      
      let dot = `
          <div class="dot ${active}" data-index="${index}"></div>
        `
        container.append(dot);
    })
  },

  setActive: (index) => {
    $('.dot').removeClass('active');
    $(`.dot[data-index="${index}"]`).addClass('active');
  }
}

if ($('.about-cantent')) {
  Dots.renderDot();
}

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function wheelScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }
  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

function touchScroll(ts, te) {
  delta = te - ts;
  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
let mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
let ts;

//window.addEventListener(mousewheelEvent, _.throttle(wheelScroll, 60), false);
window.addEventListener(mousewheelEvent, _.throttle(wheelScroll, 60), false);
window.addEventListener("touchstart", function(e) {
  ts = e.touches[0].clientY;
}, false);
window.addEventListener("touchend", function(e) {
  let te = e.changedTouches[0].clientY;
  touchScroll(ts, te);
}, false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  let $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  Dots.setActive(currentSlideNumber);
}

function previousItem() {
  let $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  Dots.setActive(currentSlideNumber);
}

$('.scroll-up').click(function() {
  //Up scroll
  ticking = true;
  if (currentSlideNumber !== 0) {
    currentSlideNumber--;
  }
  previousItem();
  slideDurationTimeout(slideDurationSetting);
})

$('.scroll-down').click(function() {
  ticking = true;
  if (currentSlideNumber !== totalSlideNumber - 1) {
    currentSlideNumber++;
    nextItem();
  }
  slideDurationTimeout(slideDurationSetting);
})

$('.about-link').click(function() {
  $('.about-component').addClass('active');
  stopBodyScrolling(true);
})

$('.about-component .close').click(function() {
  $('.about-component').removeClass('active');
  stopBodyScrolling(false);
})

$('.callback-form form').submit(function(e) {
  event.preventDefault();
  document.querySelector('.callback-form form').reset();
  $('.order-block').removeClass('menu-slide-in')
  $('.success-message').addClass('active')
  $('#menu').hasClass('menu-slide-in') ? stopBodyScrolling(true) : stopBodyScrolling(false);
})