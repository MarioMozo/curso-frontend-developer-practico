const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log("Se hizo click");
    desktopMenu.classList.toggle('inactive');

}

console.log("main.js ejecuntado...");