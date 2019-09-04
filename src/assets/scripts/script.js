$(document).ready(function() {
    if ($('.about-content')[0]) {
        $('body, html').css('position', 'fixed');
    }

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

})

