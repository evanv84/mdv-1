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

    if (window.location.hash === '#order') $('.order-btn').click();
    if (window.location.hash === '#about') $('.about-link').click();

    var touch = {};

    window.onload = function () {
        "use strict";
        document.body.addEventListener("touchstart", touchHandler, {passive: false});
        document.body.addEventListener("touchend", touchHandler, {passive: false});
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
                    $('body').css('pointer-event', 'none')
                } else {
                    // enable scroll if swipe was not intended
                    $('body').css('pointer-event', 'auto')
                }
            }
        } else {
            // keep scroll enabled if touch is outside the image slider 
            $('body').css('pointer-event', 'auto')
        }
    }

})

