let list = document.querySelector('.box .list');
let items = document.querySelectorAll('.box .list .item');
let dots = document.querySelectorAll('.box .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick =function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=>{next.click()}, 3000);

function reloadSlider(){
    let checkLeft = items [active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.box .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next.click()}, 3000);
}

dots.forEach((li, key) =>{
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

/*BUTTON */

const wrapper = 
document.querySelector('.wrapper');

const loginlink = 
document.querySelector('.login-link');

const registerlink = 
document.querySelector('.register-link');

const btnpopup = 
document.querySelector('.btnlogin-popup');

const iconClose = 
document.querySelector('.icon-close');

const loginButton =
 document.getElementById("aaa");

 const homeSection = document.querySelector(".container");

 registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

btnpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
loginButton.addEventListener("click", function() {
    const offsetTop = homeSection.offsetTop;
    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      top: offsetTop,
    });
  });