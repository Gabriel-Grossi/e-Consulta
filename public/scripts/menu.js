const menuOverlay = document.querySelector('.menu-overlay');
const overlayMenu = document.querySelector('.overlay-menu');
const closeIcon = document.querySelector('.close-icon');

menuOverlay.onclick = () => overlayMenu.classList.toggle('active-menu');
closeIcon.onclick = () => overlayMenu.classList.remove('active-menu')