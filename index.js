function openPopup(el) { // get the class name in arguments here
    $.magnificPopup.open({
        items: {
            src: '#small-dialog'
        , }
        , type: 'inline'
    });
}
(function ($) {
    $.fn.goTo = function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 1500);
        return this; // for chaining...
    }
})(jQuery);

$(document).ready(function () {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image'
        , closeOnContentClick: true
        , mainClass: 'mfp-img-mobile'
        , image: {
            verticalFit: true
        }

    });
    $('.photogalery').magnificPopup({
        delegate: 'a'
        , type: 'image'
        , tLoading: 'Loading image #%curr%...'
        , mainClass: 'mfp-img-mobile'
        , gallery: {
            enabled: true
            , navigateByImgClick: true
            , preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
        , image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            , titleSrc: function (item) {
                return item.el.attr('title') + '';
            }
        }
    });


    if ($('.bank').length)
        $('.bank').mouseenter(function () {
            $(this).find(".toanim").slideUp();
        }).mouseleave(function () {
            $(this).find(".toanim").slideDown();
        });

    if ($('.toManager').length)
        $('.toManager').click(function (e) {
            e.preventDefault();
            $('#baner').goTo()

        });
    if ($('#scrollToabout').length)
        $('#scrollToabout').click(function (e) {
            e.preventDefault();
            if ($('#about__micro').length)
                $('#about__micro').goTo();
        });
    if ($('.baner__form--submit').length)
        $('.baner__form--submit').click(function (e) {
            e.preventDefault();
            openPopup(this.className);

        });
});