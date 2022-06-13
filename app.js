//Selected Items
const lineOne = document.querySelector('.line-one')
const lineTwo = document.querySelector('.line-two');
const burgerMenu = document.querySelector('.mobile-menu');
const popUp = document.querySelector('.mobile-menu-pop-up');
const navItems = document.querySelectorAll('#nav-items');
const workPage = document.querySelector('#work-main');
const sections = document.querySelector('.sections');

//add Event Listeners 
burgerMenu.addEventListener('click', openMobileMenu);

function openMobileMenu (){
    burgerMenu.classList.toggle('x-active');
    if(burgerMenu.classList[1] === 'x-active'){
        popUp.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
        // sections.style.display = 'none';
        sections.style.position = 'fixed'; 
        gsap.to(lineOne, {rotate: 45, x: '-5', y: '6', duration: 1});
        gsap.to(lineTwo, {rotate: -45, x: '-5', y:'-6', duration: 1});
    }else if(burgerMenu.classList[1] === undefined){
        popUp.style.display = 'none';
        document.body.style.overflowY = 'auto';
        // sections.style.display = 'block';
        sections.style.position = 'static';
        gsap.to(lineOne, {rotate: 0, x: '0', y: '0', duration: 1 });
        gsap.to(lineTwo, {rotate: 0, x: '0', y:'0', duration: 1});
    }
    
}
//position fixed causes the problem with the X moving, so I think in order to fix this bug, I will have to reorder the x when it does movce because of the positioning 