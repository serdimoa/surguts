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
    if($('.bank').length)
        $('.bank').mouseenter(function(){
            $(this).find(".toanim").slideUp();
        }).mouseleave(function(){
            $(this).find(".toanim").slideDown();
        });
        
    if($('.toManager').length)
        $('.toManager').click(function(e){
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