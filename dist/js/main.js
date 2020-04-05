//style="background-image: url(img/background1.jpg);"

// Select Dom Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-items');

//Set initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toogleMenu);

function toogleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}


// // MODAL IMAGES
// var modal1 = document.getElementById('modal1');
// var img1 = document.getElementById('img1')


// function openModal() {
//     modal1.style.display = 'block';
// }
// function closeModal(x) {
//     x.style.display = 'none';
// }

// img1.addEventListener('click', openModal(modal1))
