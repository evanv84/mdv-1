$(document).ready(function() {

    // $('.post-socials').jsSocials({
    //     shares: [
    //         {share: "vkontakte", logo: 'fab fa-vk'}, 
    //         {share: "twitter", logo: 'fab fa-twitter'}, 
    //         {share: "facebook", logo: 'fab fa-facebook-f'}, 
    //         {share: "telegram", logo: 'fab fa-telegram-plane'}
    //     ]
    // });
    
    (function(w,doc) {
    if (!w.__utlWdgt ) {
        w.__utlWdgt = true;
        var d = doc, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = ('https:' == w.location.protocol ? 'https' : 'http')  + '://w.uptolike.com/widgets/v1/uptolike.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
    }})(window,document);

    $('.callback-form form').submit(function(e) {
        event.preventDefault();
        document.querySelector('.callback-form form').reset();
        $('.order-block').removeClass('menu-slide-in')
        $('.success-message').addClass('active')
    })

    if (window.location.hash === '#order') $('.order-btn').click();
    if (window.location.hash === '#about') $('.about-link').click();


    var touch = {};

    window.onload = function () {
        "use strict";
        document.body.addEventListener("touchstart", touchHandler);
        document.body.addEventListener("touchend", touchHandler);
    };

    function touchHandler(e) {
        "use strict";

        var el = e.target;
        if (el.parentNode.className === "item") {
            if (e.type === "touchstart") {
                touch.startX = e.changedTouches[0].screenX;
                touch.startY = e.changedTouches[0].screenY;
            } else {
                touch.endX = e.changedTouches[0].screenX;
                touch.endY = e.changedTouches[0].screenY;

                touch.lenX = Math.abs(touch.endX - touch.startX);
                touch.lenY = Math.abs(touch.endY - touch.startY);

                if (touch.lenY < 20) {
                    // disable scroll
                    document.body.style.overflowY = "hidden";
                } else {
                    // enable scroll if swipe was not intended
                    document.body.style.overflowY = "scroll";
                }
            }
        } else {
            // keep scroll enabled if touch is outside the image slider 
            document.body.style.overflowY = "scroll";
        }
    }

})

