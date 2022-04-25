$('.banner__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.information__banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.reviews__slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
  

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