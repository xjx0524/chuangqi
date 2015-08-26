$('.dept').on('mouseenter', 'a', function(e) {
    var ul = $($(this).data('parent'));
    ul.find('a').each(function() {
        $(this).removeClass('active');
        $($(this).data('target')).addClass('hide');
    });
    $(this).addClass('active');
    $($(this).data('target')).removeClass('hide')
});