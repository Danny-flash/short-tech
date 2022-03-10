const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
})

const btn = document.querySelector('.button');

btn.addEventListener('click', (e)=>{
      e.preventDefault()
})
