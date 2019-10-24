
// Category selectors
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#nav-container').css('display', 'none');
            $('#nav-container-mob').addClass('show-nav-mob');
        }
        else {
            $('#nav-container-mob').removeClass('show-nav-mob');
            $('#nav-container').css('display', 'block');
        }
    });

    $('#all').on('click', function(){
        highlight($('#all'))
        setTimeout(function(){
            show($('#1, #2, #3, #4, #5, #6'))
        }, 50)
    })
    $('#content').on('click', function(){
        highlight($('#content'))
        setTimeout(function(){
            show($('#1, #2, #3'))
        }, 50)
    })
    $('#tooling').on('click', function(){
        highlight($('#tooling'))
        setTimeout(function(){
            show($('#4, #5'))
        }, 50)
    })
    $('#metrics').on('click', function(){
        highlight($('#metrics'))
        setTimeout(function(){
            show($('#6'))
        }, 50)
    })
 });

 const hide = (e) => {
    e.removeClass('show')
    e.addClass('hide')
 }

 const show = (e) => {
    e.removeClass('hide')
    e.addClass('show')
 }

 const highlight = (e) => {
    $('.categories').removeClass('highlight')
    e.addClass('highlight')
    hide($('#1, #2, #3, #4, #5, #6'))
 }







