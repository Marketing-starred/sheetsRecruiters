
// Category selectors
$(document).ready(function() {

    const nav = '<div id="nav-container">\
    <header>\
    <div id="nav-logo"><a href="/"><img src="/assets/sheets-logo-white.png" alt="SFR logo"></a></div>\
    <div>\
        <a class="color--white bold f17 m-r-20" href="/sheets" class="uppercase">SHEETS</a>\
        <a class="color--white bold f17" href="https://www.starred.com/about" target="_blank" class="uppercase">ABOUT</a>\
    </div>\
    </header>\
    </div> \
    <div id="nav-container-mob"> <!-- Mob Navbar -->\
    <header>\
        <div id="nav-logo-mob"><a href="/"><img src="/assets/logo-favicon.svg" alt="SFR logo"></a></div>\
        <div>\
            <a class="bold f17 m-r-20 color--white" href="/sheets" class="uppercase">SHEETS</a>\
            <a class="bold f17 color--white" href="https://www.starred.com/about" target="_blank" class="uppercase">ABOUT</a>\
        </div>\
    </header>\
    </div>';

    const footer = '<div class="row flex--row row-footer">\
    <div class="w-100 footer-video">\
        <div class="circles">\
            <div></div>\
            <div></div>\
            <div></div>\
        </div>\
        <script src="https://fast.wistia.com/embed/medias/ysh3zeeea2.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_ysh3zeeea2 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/ysh3zeeea2/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>\
    </div>\
    <div class="color--white p-l-80 w-80">\
        <div class="footer-logo"><img src="/assets/starred-white-full.png" alt="Starred"></div>\
        <h3 class="m-t-10">Take Control of your Candidate Experience</h3>\
        <p class="f19">Our feedback solution empowers Talent Acquisition teams to effortlessly gather feedback and get the actionable insights you need to drive change.</p>\
        <a class="btn btn--green" href="https://www.starred.com" target="_blank">Visit Starred.com</a>\
    </div>\
    </div>';

    $('#navbar').html(nav);    
    $('#footer').html(footer);


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








