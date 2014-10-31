$(function() {
    var nav = $('#nav');
    var navWrap = $('#navWrap');
    var navHomeY = navWrap.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            navWrap.css({
                position: 'fixed',
                top: 0,
                left: navWrap.offset().left,
                width: navWrap.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            navWrap.css({
                top: navHomeY,
                position: 'static'
            });
            isFixed = false;
        }
    });
});
