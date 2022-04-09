/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

ScrollReveal().reveal(`.about .main-text`,{origin: 'top', delay: 400, distance: '100px', duration: 2000})
ScrollReveal().reveal(`.about .photo-1`,{origin: 'left', delay: 800, distance: '100px', duration: 2000})
ScrollReveal().reveal(`.about .photo-2`,{origin: 'bottom', delay: 1200, distance: '100px', duration: 2000})
ScrollReveal().reveal(`.about .description`,{origin: 'right', delay: 1600, distance: '100px', duration: 2000})

ScrollReveal().reveal(`.projects .main-text`,{origin: 'top', delay: 700, distance: '100px', duration: 2000})
ScrollReveal().reveal(`.projects .photo-left`,{origin: 'left', delay: 700, distance: '100px', duration: 2000})
ScrollReveal().reveal(`.projects .photo-right`,{origin: 'right', delay: 700, distance: '100px', duration: 2000})
ScrollReveal().reveal(`.projects .desc-left`,{origin: 'left', delay: 700, distance: '100px', duration: 2000})
ScrollReveal().reveal(`.projects .desc-right`,{origin: 'right', delay: 700, distance: '100px', duration: 2000})

ScrollReveal().reveal(`.skills`,{origin: 'top', delay: 400, distance: '100px', duration: 2000})
ScrollReveal().reveal(`.skills .container > div`,{origin: 'bottom', delay: 700, distance: '100px', duration: 2000})

ScrollReveal().reveal(`.footer .contact`,{origin: 'left', delay: 500, distance: '100px', duration: 1500})
ScrollReveal().reveal(`.footer .social-links`,{origin: 'right', delay: 500, distance: '100px', duration: 1500})
ScrollReveal().reveal(`.footer .copyright`,{origin: 'top', delay: 500, distance: '100px', duration: 1500})