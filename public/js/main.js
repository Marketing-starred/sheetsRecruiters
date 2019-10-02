// Global variables

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const docEventListener = document.addEventListener.bind(document);
const on = addEventListener;

// Displaying Navbar and Footer in all pages (where a '#nav' and '#footer' elements are available)

docEventListener("DOMContentLoaded", function() {
  var navbar = '<header id="nav">\
<div class="nav-logo">\
    <a class="nav-logo-img" href="/">\
      <div><img id="shape" src="https://cdn.logyy.nl/assets/starred-shape.gif"></div>\
      <div><img id="word" alt="Starred" src="https://cdn.logyy.nl/assets/starred-word.png"></div>\
    </a>\
</div>\
<div class="header-right">\
    <ul>\
        <div>\
            <li id="products"><a href="#">Products</a></li>\
            <div class="dropdown">\
            <a href="/products/candidate-experience">\
                <p>Candidate experience</p>\
                <p>For talent acquisition and recruitment agencies looking to measure and improve their Candidate Experience</p>\
            </a>\
            <a href="/products/employee-engagement">\
                <p>Employee Engagement</p>\
                <p>For HR professionals looking to build and empowered and engaged workforce</p>\
            </a>\
            <a href="/products/customer-feedback">\
                <p>Customer Feedback</p>\
                <p>For customer care professionals looking to improve customer experience and retain more business</p>\
            </a>\
            <a href="/integrations">\
                <p class="item-dropdown-highlight">Integrations</p>\
                <p>To connect your applications, accelerate your feedback process, and automate your surveys</p>\
            </a>\
            <a class="last-dropdown-item" href="/product-updates">\
                <p class="item-dropdown-highlight">Product Updates</p>\
                <p>Get the scoop on what’s new in our platform</p>\
            </a>\
            </div>\
        </div>\
        <li id="resources"><a href="#">Resources</a></li>\
        <div class="dropdown2">\
            <div>\
            <p class="highlight--blue m-b-15 bold">TO READ</p>\
            <div>\
                <a href="#">\
                <p>Blog</p>\
                <p>Stay up to date with the latest articles on People Experience</p>\
                </a>\
                <a href="/client-stories">\
                <p>Client stories</p>\
                <p>Read how our platform is helping our clients in their own words</p>\
                </a>\
                <a href="/candidate-experience-feedback-guide/">\
                <p class="new">The Ultimate guide to Candidate Experience Feedback</p>\
                <p>Everything you need to know to improve your CandE</p>\
                </a>\
                <a href="/candidate-experience-benchmark-report/" class="last-dropdown-item">\
                <p>Candidate Experience Benchmark Report</p>\
                <p>How do you compare with recruitment agencies in the Netherlands?</p>\
                </a>\
            </div>\
            </div>\
            <div class="p-rl-40">\
            <p class="highlight--green m-b-15 bold">TO WATCH</p>\
            <div>\
                <a target="_blank" href="https://fast.wistia.net/embed/channel/ipfn0434on">\
                    <p>Video Guides</p>\
                    <p>All you need to know in short and to the point videos</p>\
                </a>\
                <a target="_blank" href="https://fast.wistia.net/embed/channel/qir52aekrr">\
                    <p>Product Videos</p>\
                    <p>Learn how to leverage the power of our platform</p>\
                </a>\
                </a>\
            </div>\
            </div>\
            <div>\
            <p class="highlight--orange m-b-15 bold">TO ACT</p>\
            <div>\
                <a href="/candidate-experience-cost-estimator/">\
                    <p>Candidate Experience cost estimator</p>\
                    <p>Understand how much a poor CandE might be costing your business.</p>\
                </a>\
            </div>\
            </div>\
        </div>\
        <li><a href="/pricing">Pricing</a></li>\
        <li><a href="/about">About</a></li>\
    </ul>\
    <ul>\
        <li><a class="login" href="https://auth.starred.com/login?response_type=code&client_id=4eea61jjl625nhqt4s0lraaba5&scope=aws.cognito.signin.user.admin+openid+email&state=de0874e8b7212fba65d2ea1f87a79135&redirect_uri=https%3A%2F%2Fapp.starred.com%2Foauth2%2Fidpresponse">Log in</a></li>\
        <li><a class="nav-btn" href="/request-a-demo">Request a demo</a></li>\
    </ul>\
</div>\
<div class="menuToggle-container">\
    <div id="menuToggle">\
        <input type="checkbox" class="burguer"/>\
        <span></span>\
        <span></span>\
        <span></span>\
    </div>\
</div>\
</header>\
</div>\
<div class="mob-menu-container">\
<div id="mob-menu">\
<div class="main-mob flex--column">\
    <a class="login" href="https://auth.starred.com/login?response_type=code&client_id=4eea61jjl625nhqt4s0lraaba5&scope=aws.cognito.signin.user.admin+openid+email&state=de0874e8b7212fba65d2ea1f87a79135&redirect_uri=https%3A%2F%2Fapp.starred.com%2Foauth2%2Fidpresponse" class="mob-login w-100 center-align color--white"><strong>Log in</strong></a>\
    <a href="/request-a-demo" class="mob-demo w-100 center-align color--white"><strong>Request a demo</strong></a>\
</div>\
<ul>\
    <li>\
        <div class="mob-products mob-items bt--none mob-drop">\
            <p>Products</p>\
            <span class="arrow-prod mob-arrow"><img class="w-100" src="https://cdn.logyy.nl/assets/angle-arrow-down.svg" alt="arrow"></span>\
        </div>\
        <div id="mob-products-sub" class="mob-subs">\
            <a href="/products/candidate-experience">Candidate Experience</a>\
            <a href="/products/employee-engagement">Employee Engagement</a>\
            <a href="/products/customer-feedback">Customer Feedback</a>\
            <a href="/integrations">Integrations</a>\
            <a href="/product-updates">Product Updates</a>\
        </div>\
    </li>\
    <li>\
        <div class="mob-resources mob-items mob-drop">\
            <p>Resources</p>\
            <span class="arrow-res mob-arrow"><img class="w-100" src="https://cdn.logyy.nl/assets/angle-arrow-down.svg" alt="arrow"></span>\
        </div>\
        <div id="mob-resources-sub" class="mob-subs">\
            <a href="/blog">Blog</a>\
            <a href="/client-stories">Client Stories</a>\
            <a href="/candidate-experience-feedback-guide/">The Ultimate Guide to<br>Candidate Experience Feedback</a>\
            <a href="/candidate-experience-benchmark-report/">Candidate Experience Benchmark Report</a>\
            <a href="https://fast.wistia.net/embed/channel/ipfn0434on">Video Guides</a>\
            <a href="https://fast.wistia.net/embed/channel/qir52aekrr">Product Videos</a>\
            <a href="/candidate-experience-cost-estimator/">Candidate Experience cost estimator</a>\
        </div>\
    </li>\
    <li class="mob-items"><a href="/pricing">Pricing</a></li>\
    <li class="mob-items bb--black"><a href="/about">About</a></li>\
</ul>\
</div>\
</div>';

document.getElementById('nav-container').innerHTML = navbar;

  var footer = '<div class="">\
  <p class="footer-title">product</p>\
  <a href="/products/candidate-experience">Candidate Experience</a>\
  <a href="/products/customer-feedback">Customer Feedback</a>\
  <a href="/products/employee-satisfaction">Employee Satisfaction</a>\
</div>\
<div class="">\
  <p class="footer-title">company</p>\
  <a href="/about">About us</a>\
  <a href="/blog">Blog</a>\
  <a href="#">Jobs</a>\
</div>\
<div class="middle-footer">\
  <p class="footer-title">legal</p>\
  <a href="/security">Security</a>\
  <a href="/privacy">Privacy</a>\
  <a href="/terms-and-conditions">Terms and Conditions</a>\
  <a href="/cookies-statement">Cookies Statement</a>\
</div>\
<div class="footer-social">\
  <p class="footer-title">social</p>\
  <div class="footer-icons">\
      <a rel="noreferrer" href="https://www.linkedin.com/company/starred/" target="_blank"><img src="https://cdn.logyy.nl/assets/linkedin-icon.svg" alt="linkedin icon"></a>\
      <a rel="noreferrer" href="https://www.facebook.com/starredcom/" target="_blank"><img src="https://cdn.logyy.nl/assets/facebook-icon.svg" alt="facebook icon"></a>\
      <a rel="noreferrer" href="https://twitter.com/Starred_com" target="_blank"><img src="https://cdn.logyy.nl/assets/twitter-icon.svg" alt="twitter icon"></a>\
      <a rel="noreferrer" href="https://www.instagram.com/lifeatstarred/" target="_blank"><img src="https://cdn.logyy.nl/assets/instagram-icon.svg" alt="instagram icon"></a>\
  </div>\
</div>';

document.getElementById('footer').innerHTML = footer;


// Mobile logo animation 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#word").classList.remove('logo-hide');
    $("#shape").classList.remove('logo-big');
  } else {
    $("#word").classList.add('logo-hide');
    $("#shape").classList.add('logo-big'); 
  }
  prevScrollpos = currentScrollPos;
}
// *** End Mobile logo animation 
});
// *** End displaying Nav and Footer 

// Global main functions

var hide = function(elem) {
  elem.classList.add("no-display");
};

var show = function(elem) {
  elem.classList.remove("no-display");
};

var toggle = function (elem) {
	if (elem.classList.contains('no-display')) {
		show(elem);
  } else {
    hide(elem);
  }
};
// ** Global main functions

// LazyLoad images 

docEventListener("DOMContentLoaded", function() {
  if (typeof LazyLoad === 'undefined' || LazyLoad === null) {
    lazyLoadSafari(); 
  } else {
    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
      // ... more custom settings?
    });
  }
});

function lazyLoadSafari(){
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;
  const lazyLoad = function() {
  if (active === false) {
    active = true;
    setTimeout(function() {
      lazyImages.forEach(function(lazyImage) {
        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImages = lazyImages.filter(function(image) {
            return image !== lazyImage;
          });
          if (lazyImages.length === 0) {
            document.removeEventListener("scroll", lazyLoad);
            window.removeEventListener("resize", lazyLoad);
            window.removeEventListener("orientationchange", lazyLoad);
          }
        }
      });
      active = false;
    }, 200);
  }
};

docEventListener("scroll", lazyLoad);
window.addEventListener("resize", lazyLoad);
window.addEventListener("orientationchange", lazyLoad);
}
// *** End LazyLoad image

// Navbar Mobile

var showNav = function(elem) {
  elem.style.display = "flex";
  $(".page-content").style.display = "none";
};

var hideNav = function(elem) {
  elem.style.display = "none";
  $(".page-content").style.display = "block";
};

var toggleNav = function(elem) {
  var mobContainer = $(".mob-menu-container");
  if (window.getComputedStyle(elem).display === "flex") {
    hideNav(elem);
    mobContainer.classList.remove("mob-menu-container-activated");
    return;
  }
  mobContainer.classList.add("mob-menu-container-activated");
  showNav(elem);
};

docEventListener('click', function (event){
  if (!event.target.classList.contains('burguer')) return;
  event.preventDefault();

  $('#mob-products-sub').style.height = '0px';
  $('#mob-resources-sub').style.height = '0px';
  $('.arrow-res').classList.remove('arrow-active');
  $('.arrow-prod').classList.remove('arrow-active');
  var content = $('#mob-menu');
  toggleNav(content);
  docEventListener('click', function(event) {
    if (!event.target.classList.contains('mob-drop')) return;
    event.preventDefault();
    if (event.target.classList.contains('mob-products')){  // Click event for Products dropdown
        var content = $('#mob-products-sub');
        var arrowProd = $('.arrow-prod');
        toggleDropdown(content, arrowProd, '195px');
    } else {
      if (event.target.classList.contains('mob-resources')){ // Click event for Resources dropdown
        var content = $('#mob-resources-sub');
        var arrowProd = $('.arrow-res');
        toggleDropdown(content, arrowProd, '330px');
      };
    }
  }, true);
}, true);
// *** End Navbar Mobile /


// Mobile Navbar dropdowns

function toggleDropdown(content, arrow, height){ 
  if(content.style.height === height){
    content.style.height = '0px';
    arrow.classList.remove('arrow-active');
  } else {
    content.style.height = height
    arrow.classList.add('arrow-active');
  }
}



