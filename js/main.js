$(function() {
    $('.dept').on('mouseenter', 'a', function(e) {
        var ul = $($(this).data('parent'));
        ul.find('a').each(function() {
            $(this).removeClass('active');
            $($(this).data('target')).addClass('hide');
        });
        $(this).addClass('active');
        $($(this).data('target')).removeClass('hide')
    });

    $('.dept-phone').on('click', 'a', function(e) {
        var btn_group = $($(this).data('parent'));
        btn_group.find('a').each(function() {
            $(this).removeClass('active');
            $($(this).data('target')).addClass('hide');
        });
        $(this).addClass('active');
        $($(this).data('target')).removeClass('hide')
    });


    $('.banner').unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 3000,              //  The delay between slide animations (in milliseconds)
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });
});

