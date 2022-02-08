const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const mobileShadow = document.getElementById('mobile-shadow')
const themeSwitcher = document.getElementById('theme-switcher')
const nav = document.querySelector('.nav')

menuBtn.addEventListener('click', e => {
    menuBtn.classList.toggle('open')
    mobileMenu.classList.toggle('open')
    mobileShadow.classList.toggle('open')
})

mobileShadow.addEventListener('click', e => {
    menuBtn.classList.remove('open')
    mobileMenu.classList.remove('open')
    mobileShadow.classList.remove('open')
})

window.addEventListener('scroll', e => {
    if(window.scrollY > 0) {
        nav.classList.add('compact')
    } else {
        nav.classList.remove('compact')
    }
})

themeSwitcher.addEventListener('change', (e) => {
    if(themeSwitcher.checked) {
        document.body.classList.add('light')
    } else {
        document.body.classList.remove('light')
    }
})

document.addEventListener('swiped-left', function(e) {
    if(mobileMenu.classList.contains('open')) {
        menuBtn.classList.remove('open')
        mobileMenu.classList.remove('open')
        mobileShadow.classList.remove('open')
    }
});