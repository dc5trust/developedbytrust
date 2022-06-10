//Selected Items
const lineOne = document.querySelector('.line-one')
const lineTwo = document.querySelector('.line-two');
const burgerMenu = document.querySelector('.mobile-menu');
const popUp = document.querySelector('.mobile-menu-pop-up');
const navItems = document.querySelectorAll('#nav-items');

//add Event Listeners 
burgerMenu.addEventListener('click', openMobileMenu);

navItems.forEach((items)=>{
    items.addEventListener('click', ()=>{
        //body position fixed removed 
        // document.body.style.position = 'static';
        console.log(items);
        gsap.to(items, {opacity: .5, duration: 1 });
        // gsap.to(lineTwo, {rotate: 0, x: '0', y:'0', duration: 1});
        //mobile pop up display hidden none
    });
});

function openMobileMenu (){
    burgerMenu.classList.toggle('x-active');
    if(burgerMenu.classList[1] === 'x-active'){
        popUp.style.display = 'flex';
        document.body.style.position = 'fixed';
        gsap.to(lineOne, {rotate: 45, x: '-5', y: '6', duration: 1});
        gsap.to(lineTwo, {rotate: -45, x: '-5', y:'-6', duration: 1});
    }else if(burgerMenu.classList[1] === undefined){
        popUp.style.display = 'none';
        document.body.style.position = 'static';
        gsap.to(lineOne, {rotate: 0, x: '0', y: '0', duration: 1 });
        gsap.to(lineTwo, {rotate: 0, x: '0', y:'0', duration: 1});
    }
    
}