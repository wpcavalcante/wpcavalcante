//Loader
document.addEventListener('DOMContentLoaded', () =>{
    const tl = gsap.timeline()

    tl.fromTo('.loader', 1,
    { width: '100%'},
    {width: '0%', 
    delay:3.5,
    ease: Expo.easeInOut})

    .fromTo('.navbar', 1,
    {y: 50, opacity:0},
    {y: 0, opacity: 1,ease: Expo.ease}, '-=0.5')

    .fromTo('.info-title', 1.5,
    {x: -50, opacity:0},
    {x: 0, opacity: 1,ease: Expo.ease}, '-=0.5')

    .fromTo('.about-logo', 1.5,
    {x: 50, opacity:0},
    {x: 0, opacity: 1,ease: Expo.ease}, '-=1.5')

    .fromTo('.info-p', 1.5,
    {x: 100, opacity:0},
    {x: 0, opacity: 1,ease: Expo.ease}, '-=0.5')

    .fromTo('.project-text', 1.5,
    {x: 50, opacity:0},
    {x: 0, opacity: 1,ease: Expo.ease}, '-=01')

    .fromTo('.slidebar', 1.5,
    {display:"none"},
    {display:"flex", ease: Expo.ease}, '-=1.5')

    .fromTo('.projects', 1.5,
    {display:"none"},
    {display:"flex", ease: Expo.ease}, '-=1.5')

    .fromTo('.contact', 1.5,
    {display:"none"},
    {display:"block", ease: Expo.ease}, '-=1.5')

    .fromTo('footer', 1.5,
    {display:"none"},
    {display:"block", ease: Expo.ease}, '-=1.5')
    
})

//Scroll
const btnScroll = document.querySelector('.btn-scroll')

btnScroll.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

//Mobile Menu

const mobileMenu = document.querySelector(".js-mobile-menu")
const btnMobile = document.querySelector(".js-btn-sidebar")

btnMobile.addEventListener("click", (event) =>{
    event.preventDefault()

    mobileMenu.classList.toggle("show")
})