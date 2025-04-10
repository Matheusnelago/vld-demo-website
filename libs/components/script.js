const menuBtn = document.querySelector('.menu-icon')
const navlinks = document.querySelector('.nav-links')
menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
    menuBtn.display = '/libs/icons/menu-close.svg'
})