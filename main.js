/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* search show */
if(searchButton){
    searchButton.addEventListener('click', () => { 
        searchContent.classList.add('show-search')
    })
}

/* search hidden */
if(searchClose){
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/* login show */
if(loginButton){
    loginButton.addEventListener('click', () => { 
        loginContent.classList.add('show-login')
    })
}

/* login hidden */
if(loginClose){
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints:{
       1220: {
        spaceBetween: -32,
       } 
    }
})
/*=============== FEATURED SWIPER ===============*/
let swipeFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints:{
       1150: {
        slidesPerView:4,
        centeredSlides: false,
       } 
    }
})

/*=============== NEW SWIPER ===============*/
let swiperNew= new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',
  


    breakpoints:{
       1150: {
        slidesPerView: 3,
   
       } 
    }
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides: 'auto',


    breakpoints:{
       1150: {
        slidesPerView:3,
        centeredSlides: false,
       } 
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
const scrollUp = document.getElementById('scroll-up')
 // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
	: scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected theme (if the user selected one)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Get the current theme and icon by checking the classes
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Check if the user previously chose a theme
if (selectedTheme) {
    // Apply the stored theme and icon
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Add event listener to the theme button to toggle the theme manually
themeButton.addEventListener('click', () => {
    // Toggle dark theme and icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Save the chosen theme and icon in localStorage
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true, //Animations repeat
})
sr.reveal('.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer');
sr.reveal('.home__images', { delay: 600 });
sr.reveal('.services__card', { interval: 100 });
sr.reveal('.discount__data', { origin: 'left' });
sr.reveal('.discount__images', { origin: 'right' });

