//Selected Items
const lineOne = document.querySelector('.line-one')
const lineTwo = document.querySelector('.line-two');
const burgerMenu = document.querySelector('.mobile-menu');
const popUp = document.querySelector('.mobile-menu-pop-up');

//add Event Listeners 
burgerMenu.addEventListener('click', openMobileMenu);

function openMobileMenu (){
    popUp.style.display = 'flex';

}