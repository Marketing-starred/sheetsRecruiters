// Global variables

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const docEventListener = document.addEventListener.bind(document);
const on = addEventListener;

document.addEventListener('scroll', function (event) {
  if(window.pageYOffset>300){
    $('.preview-sheets').classList.add("show-preview");
  }
}, false); 




