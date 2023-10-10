const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const desktopMobile = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleDesktopMobile);

function toggleDesktopMenu(){
    console.log("Se hizo click");
    desktopMenu.classList.toggle('inactive');

}

function toggleDesktopMobile() {
    desktopMobile.classList.toggle('inactive');
}