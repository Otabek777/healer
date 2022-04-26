if(document.querySelector('.tabs')) {
    (function($) {
        $(function() {
            $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
            });
        });
    })(jQuery);
}
if(document.querySelector('.read_more_block')) {
    $( ".open_read_more" ).click(function() {
        $(this).addClass('none');
        $('.read_more_block').addClass('open');
    });
};
if(document.querySelector('.accordion__btn')) {
    $( ".accordion__btn" ).click(function() {
        $(this).toggleClass('active');
    });
    $( ".accordion__btn2" ).click(function() {
        $(this).toggleClass('active');
    });
}
if(document.querySelector('.banner__slider')) {
    $('.banner__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}
if(document.querySelector('.information__banner')) {
    $('.information__banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}
if(document.querySelector('.reviews__slick')) {
    $('.reviews__slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
};



