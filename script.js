$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) { // This checks if you've scrolled more than 50px
            $('.down-arrow').fadeOut(); // Hides the arrow with a fading effect
        } else {
            $('.down-arrow').fadeIn(); // Shows the arrow again when you scroll up
        }
    });
});


function scrollToIframe(iframeId) {
    $('html, body').animate({
        scrollTop: $(iframeId).offset().top
    }, 1000);  // Duration of the smooth scroll in milliseconds
}


