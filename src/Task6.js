const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    header.classList.add('navbarDark');
}   