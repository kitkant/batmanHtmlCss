$(document).ready(function () {
    let tabsItem = $('.tabs-item')
    tabsItem.on('click',function (event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active')
        $(activeContent).toggleClass('visible');
        $(this).toggleClass('tabs-item-active')
    })
});