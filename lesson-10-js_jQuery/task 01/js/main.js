$('.navigation__list').on('click', '.navigation__item:not(active)', function () {
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .closest('.tab__wrapper')
        .find('.tab-pane')
        .eq($(this).index())
        .addClass('show')
        .siblings()
        .removeClass('show');
});