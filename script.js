const menueEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menuIconMovil');
const menuMobile = document.querySelector('.mobile-menu')

menueEmail.addEventListener('click', toggleMenuDesktop);
iconMenu.addEventListener('click', toggleMenuMobile);

function toggleMenuDesktop() {
    console.log('Click');
    desktopMenu.classList.toggle('inactive');    
}
function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');
    
}

console.log("Javascript ejecuntando...");