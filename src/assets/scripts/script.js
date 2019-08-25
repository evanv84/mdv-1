$(document).ready(function() {
    if ($('.about-content')[0]) {
        $('body, html').css('position', 'fixed');
    }

    $('.post-socials').jsSocials({
        shares: [
            {share: "vkontakte", logo: 'fab fa-vk'}, 
            {share: "twitter", logo: 'fab fa-twitter'}, 
            {share: "facebook", logo: 'fab fa-facebook-f'}, 
            {share: "telegram", logo: 'fab fa-telegram-plane'}
        ]
    });
    
})

