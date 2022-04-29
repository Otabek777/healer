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
$( ".mobile_header__burgir" ).click(function() {
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('hidden');
});
$( ".modal__close" ).click(function() {
    $('.modal').removeClass('active');
    $('body').removeClass('hidden');
});
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
        slidesToScroll: 1,
        dots: true
    });
}
if(document.querySelector('.information__banner')) {
    $('.information__banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
}
if(document.querySelector('.reviews__slick')) {
    $('.reviews__slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
    });
};


// SELECT
if(document.querySelector('.select')) {
    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
}