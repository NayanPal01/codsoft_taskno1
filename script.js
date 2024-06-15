let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector('#menu-btn');
let searchForm = document.querySelector('.header .search-form');
let searchBtn = document.querySelector('#search-btn');
let loginForm = document.querySelector('.header .login-form');
let loginbtn = document.querySelector('#login-btn');
let contactInfo = document.querySelector('.contact-info');
let infobtn = document.querySelector('#info-btn');
let closecontactinfo = document.querySelector('#close-contact-info');
menuBtn.onclick = function() {

    navbar.classList.toggle("active"); 
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");  
};
searchBtn.onclick = function() {

    searchForm.classList.toggle("active"); 
    navbar.classList.remove("active"); 
    loginForm.classList.remove("active");  
};
loginbtn.onclick = function() {

    loginForm.classList.toggle("active"); 
    navbar.classList.remove("active"); 
    searchForm.classList.remove("active");
};
infobtn.onclick = function() {

    contactInfo.classList.add("active"); 
};
closecontactinfo.onclick = function() {

    contactInfo.classList.remove("active"); 
};
window.onscroll=()=>{
    navbar.classList.remove("active"); 
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");  
    contactInfo.classList.remove("active"); 
}
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".home-slider", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

