'use strict'
const mobileMenu = document.querySelector('.mobileMenu'),
    adaptiveMenu = document.querySelector('.adaptiveMenu'),
    closeMenu = document.querySelector('.closeMenu'),
    structure = document.querySelector('.structure'),
    oneComment = document.querySelectorAll('.oneComment'),
    allComments = document.querySelector('.allComments')

let sections = $('section'), 
nav = $('nav'), 
nav_height = nav.outerHeight();

structure.addEventListener('click', () => {
    oneComment.forEach(item => {
        item.className = 'activeOneComments'
    })
    allComments.className = 'activeAllComments'
})


nav.find('a').on('click', function () {
    let $el = $(this), 
    id = $el.attr('href'); 
    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 600);
    return false;
});

