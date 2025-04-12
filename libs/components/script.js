const menuBtn = document.querySelector('.menu-icon');
const navclose = '../icons/menu-close.svg'
const navopen = document.getElementById('menu-open')
const navlinks = document.querySelector('.nav-links');
const body = document.body;


menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navlinks.classList.toggle('mobile-menu')
    if(menuBtn == true){
        body.style.overflowY = 'hidden'
    }
    else{
        body.style.overflowY = 'auto'
    }
    
})